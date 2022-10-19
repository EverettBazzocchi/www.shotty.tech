import { useEffect, useState } from "react";
import api from '../../api'

import './Profile.css';

function changePassword() {
    let oldPassword = document.getElementById('oldPassword').value
    let newPassword = document.getElementById('newPassword').value
    let confirmPassword = document.getElementById('confirmPassword').value

    if (newPassword === confirmPassword) {
        api.updatePassword(oldPassword, newPassword)
            .then(() => {
                document.getElementById('error').innerHTML = "Password Changed";

                oldPassword = document.getElementById('oldPassword').value = ""
                newPassword = document.getElementById('newPassword').value = ""
                confirmPassword = document.getElementById('confirmPassword').value = ""
            }).catch((error) => {
                if (error == "AppwriteException: Invalid credentials") {
                    document.getElementById('password-error').innerHTML = "Incorrect Password";
                } else if (error == `AppwriteException: Param "password" is not optional.`) {
                    document.getElementById('password-error').innerHTML = "New Password is required";
                }
                else {
                    document.getElementById('password-error').innerHTML = error;
                    console.error(error)
                }
            })
    } else {
        document.getElementById('error').innerHTML = "Passwords do not match";
    }
}

function changeProfile() {
    let server = document.getElementById("favServer").value
    let about = document.getElementById('description').value
    let profile_error = document.getElementById('profile-error')
    api.listDocuments("staffStats").then((result) => {
        api.getAccount().then((account) => {
            let username = account.name
            result.documents.forEach((document) => {
                if (document.username == username) {
                    api.updateDocument("staffStats", document.$id, { 'server': server, 'about': about }).then((result) => {
                        profile_error.innerHTML = "Profile Updated";
                    }).catch((error) => {
                        profile_error.innerHTML = error;
                    })
                }
            })
        })
    }).catch((error) => { console.log(error) })
}


const Profile = () => {
    const [favServer, setFavServer] = useState({});
    const [description, setDescription] = useState("");

    api.getAccount().catch(() => {
        document.location.href = "/";
    });

    const [username, setUsername] = useState('')
    useEffect(() => {
        api.getAccount().then((response) => {
            setUsername(response.name)
        })
    }, [])

    useEffect(() => {
        api.listDocuments("staffStats").then((result) => {
            result.documents.forEach((document) => {
                if (document.username == username) {
                    setFavServer(document.server)
                    setDescription(document.about)
                }
            })
        }).catch((error) => { console.log(error) })
    }, [username])

    useEffect(() => {
        document.getElementById('favServer').value = favServer
    }, [favServer])


    return (
        <article id="Profile">
            <div className="Profile-Top">
                <h2>Hello, {username}</h2>
            </div>
            <div >
                <section className="Profile-Section">
                    <h3>Change Password</h3>
                    <p id="password-error"></p>
                    <form className="Profile-Form" onSubmit={e => { e.preventDefault(); }}>
                        <div className="Profile-Inputs">
                            <label htmlFor="oldPassword">Old Password:</label>
                            <input name="oldPassword" id="oldPassword" type="password" placeholder="Old Password" required />
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="password" id="newPassword" name="newPassword" placeholder="New Password" required />
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
                        </div>
                        <button onClick={changePassword}>Change Password</button>
                    </form>
                </section>

                <section className="Profile-Section">
                    <h3>Change Profile</h3>
                    <p id="profile-error"></p>
                    <form className="Profile-Form" onSubmit={e => { e.preventDefault(); }}>
                        <div className="Profile-Inputs Profile-Settings">
                            <label htmlFor="favServer">Favorite Server:</label>
                            <select defaultValue={favServer} name="favServer" id="favServer" type="" >
                                <option value="Lobby">Lobby</option>
                                <option value="Survival">Survival</option>
                                <option value="Murder_Mystery">Murder Mystery</option>
                                <option value="Skyblock">Skyblock</option>
                                <option value="Bedwars">Bedwars</option>
                                <option value="The_Bridge">The Bridge</option>
                                <option value="Build_Battle">Build Battle</option>
                            </select>
                            <label htmlFor="email">Email:</label>
                            <textarea rows="3" type="email" id="description" name="description" defaultValue={description}></textarea>
                        </div>
                        <button onClick={changeProfile} >Change Profile</button>
                    </form>

                </section>
            </div>
        </article>
    )
}

export default Profile