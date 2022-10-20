import api from '../../api'

import { useLocation } from "react-router-dom";

import './Login.css';


function login(redir) {
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value

    api.createSession(email, password)
        .then(() => {
            if (redir) {
                document.location.href = redir;
            } else {
                document.location.href = "/";
            }
        }).catch((error) => {
            if (error == "AppwriteException: Invalid credentials") {
                document.getElementById('error').innerHTML = "Incorrect Email or Password";
            } else if (error == "AppwriteException: Too many requests") {
                document.getElementById('error').innerHTML = "Too many requests, please try again later";
            }
            else {
                document.getElementById('error').innerHTML = error;
                console.error(error)
            }
        })
}

const Login = () => {


    const search = useLocation().search; 
    const redir = new URLSearchParams(search).get('redirect');

    try {
        api.getAccount().then(() => {
            document.location.href = "/";
        })
    } catch (error) { }

    return (

        <article id="Login">
            <div className="Login-Top">
                <h2>Staff Login</h2>
            </div>
            <form id="Login-Form" onSubmit={e => { e.preventDefault(); }}>
                <p id="error"></p>
                <label for="email">Email:</label>
                <input name="email" id="email" type="email" required />
                <label for="password">Password:</label>
                <input name="password" id="password" type="password" required />
                <button onClick={ () => { login(redir) }}>Login</button>
            </form>
        </article>
    )
}

export default Login