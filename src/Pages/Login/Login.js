import api from '../../api'

import './Login.css';


function login() {
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value

    api.createSession(email, password)
        .then(() => {
            document.location.href = "/";
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
                <button onClick={login}>Login</button>
            </form>
        </article>
    )
}

export default Login