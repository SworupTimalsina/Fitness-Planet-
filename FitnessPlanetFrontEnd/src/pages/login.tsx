import './login.css'
import React from 'react';

const Login: React.FC = () => {

    // const imagePath = `Login.png`;
    //
    // document.body.style.backgroundImage = `url(${imagePath})`;
    const validateLogin = () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (username === 'yourUsername' && password === 'yourPassword') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    return (

        <div id="loginForm" className="login-bg">

            <label>Login Form</label>
            <input type="text" id="username" name="username" placeholder="Username" required />
            <input type="password" id="password" name="password" placeholder="Password" required />
            <button type="button" onClick={validateLogin} style={{backgroundColor: 'red'}}>
                Login
            </button>
        </div>
    );
};

export default Login;