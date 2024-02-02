import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const validateLogin = async () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        console.log('Username:' + username);
        console.log('Password:' + password);

        try {
            const response = await fetch('http://localhost:8080/user/validateLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // const userData = await response.json();
                // localStorage.setItem('userId', userData.id);
                navigate('/dashboard');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } catch (error) {
            alert('Error during login:' + error);
        }
    };

    const validateLogina = async () => {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        console.log('Username:' + username);
        console.log('Password:' + password);

        try {
            const response = await fetch('http://localhost:8080/user/validateLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // const userData = await response.json();
                // localStorage.setItem('userId', userData.id);
                navigate('/admin');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } catch (error) {
            alert('Error during login:' + error);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="login-bg">
                <div className="login-text">
                    <label>Log In</label>
                </div>
                <div className="loginForm">
                    <div className="input-boxes">
                        <input type="text" id="username" name="username" placeholder="Username" className="username" required />
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" className="password" required />
                    </div>
                    <div className="check-container">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className="checkbox-label">Show Password</label>
                        {/*<a href="/forgotpass" className="forgotpass">*/}
                        {/*    Forgot Password*/}
                        {/*</a>*/}
                    </div>
                    <div className="login-button">
                        <button type="button" style={{ backgroundColor: 'red' }} onClick={validateLogin} className="loginbutton">
                            Login
                        </button>
                    </div>

                    <button type="button" onClick={validateLogina} className="l-admin">
                        <u>Login as admin</u>
                    </button>
                </div>
                <div className="regi-link">
                    <a href="/register" className="regsiterlink">
                        Don't have an account? Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
