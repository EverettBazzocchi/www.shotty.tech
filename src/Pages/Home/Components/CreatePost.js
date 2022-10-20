import React from 'react'
import api from '../../../api'

function submitPost(username) {
    let title = document.getElementById("Blog-Post-Form-Title").value;
    let message = document.getElementById("Blog-Post-Form-Message").value;
    let date = new Date().toLocaleString();

    api.createDocument("posts", {"author" : username, "title" : title, "message" : message, "date" : date}).then((response) => {
        document.getElementById("postError").innerHTML = "Post created successfully!";
        document.getElementById("Blog-Post-Form-Title").value = "";
        document.getElementById("Blog-Post-Form-Message").value = "";
    }).catch((error) => {
        if (error == "AppwriteException: Unauthorized permissions") {
            document.getElementById("postError").innerHTML = "Sorry, You are not authorized to create posts, please contact an admin.";
        }
        document.getElementById("postError").innerHTML = error;
    })
}

const CreatePost = ({ username }) => {
    return (
        <article className="Blog-Post">
            <div className="Blog-Post-Top">
                <div className="Blog-Post-Top-Left">
                    <h2 className="Blog-Title">Hello, {username}</h2>
                </div>
            </div>
            <div className="Blog-Post-Content">
                <form className="Blog-Post-Form" onSubmit={(e) => { e.preventDefault(); }}>
                    <h3>Create Post</h3>
                    <p id="postError"></p>
                    <label className="Blog-Post-Form-Label" htmlFor="title">Title:</label>
                    <input type="text" placeholder="Title" id="Blog-Post-Form-Title" />
                    <label className="Blog-Post-Form-Label" htmlFor="message">Message:</label>
                    <textarea placeholder="Message" id="Blog-Post-Form-Message" />
                    <button onClick={() => submitPost(username)} id="Blog-Post-Form-Submit">Post</button>
                </form>
            </div>
        </article>
    )
}

export default CreatePost