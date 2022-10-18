import { redirect} from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../api'

function login() {
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value
    api.createSession(email, password)
    
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

const Login = () => {
    const [username, setUsername] = useState('')
    
    useEffect(() => {
        try {
            api.getAccount().then((response) => {
                setUsername(response.name)
                document.location.href="/";
            })
        } catch (error) {
            setUsername(null)
        }
    }, [])
    return (
        <div className="login">
            <p>{username}</p>
            <label for="email">Email</label>
            <input name="email" id="email" type="email" required />
            <label for="password">Password</label>
            <input name="password" id="password" type="password" required />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login