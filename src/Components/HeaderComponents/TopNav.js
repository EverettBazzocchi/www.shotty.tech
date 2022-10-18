import {useState, useEffect} from 'react'
import api from '../../api'
import { NavLink } from 'react-router-dom';
import "./Header.css"

function logout() {
    api.deleteCurrentSession()
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

const TopNav = () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        try {
            api.getAccount().then((response) => {
                setUsername(response.name)
            })
        } catch (error) {
            setUsername(null)
        }
    }, [])

    var h2tag;
    if (username) {
        h2tag = <h2>Welcome, {username} <button onClick={logout}>Logout</button></h2>
    } else h2tag = <h2><NavLink to="/login">Staff Login</NavLink></h2>

    return (
        <div id="TopNav">
            <h1>Shotty Tech / Gaming</h1>
            {h2tag}
        </div>
    )
}

export default TopNav