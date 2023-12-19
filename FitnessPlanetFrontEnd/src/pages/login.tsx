import './login.css';
// import backgroundImage from '../images/Login.png';
import React, {useState} from 'react';


const Login: React.FC = () => {

    const imagePath = `../images/Login.png`;

    document.body.style.backgroundImage = `url(${imagePath})`;
    const validateLogin = () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (username === 'yourUsername' && password === 'yourPassword') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div>
        <div className="login-bg">

            <div className="login-text">
                <label>Log In</label>
            </div>

            <div className="loginForm">
            <div className="input-boxes">
                <input type="text" id="username" name="username" placeholder="      Username"  className="username" required />
                <input type="password" id="password" name="password" placeholder="      Password" className="password" required />
            </div>
                <div className="check-container">
                    <input type="checkbox" id="showPassword" checked={showPassword} onChange={togglePassword}/>
                        <label className="checkbox-label" >Show Password</label>
                    <a href="/forgotpass" className="forgotpass"> Forgot Password</a>
                </div>
                <div className="login-button">
                <button type="button" style={{ backgroundColor: 'red' }} onClick={validateLogin} className="loginbutton">
                    Login
                </button>
                </div>

            </div>
            <div className="regi-link">
                <a href="/register" className="regsiterlink"> Dont have an account? Register</a>
            </div>
        </div>
        </div>
    );

};

export default Login;