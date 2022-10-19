
import { useState, useEffect } from 'react'
import api from '../../api'

import './Login.css';


function login() {
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value
    try {
        api.createSession(email, password)
        .then((response) => {
            document.location.href = "/";
        })
    } catch (error) {
        document.getElementById('error').innerHTML = error;
    }
}

const Login = () => {
    try {
        api.getAccount().then(() => {
            document.location.href = "/";
        })
    } catch (error) {}

    return (

        <article id="Login">
            <div className="Login-Top">
                <h2>Staff Login</h2>
            </div>
            <div id="Login-Form">
                <p id="error"></p>
                <label for="email">Email:</label>
                <input name="email" id="email" type="email" required />
                <label for="password">Password:</label>
                <input name="password" id="password" type="password" required />
                <button onClick={login}>Login</button>
            </div>
        </article>
    )
}

export default Login