import React, { useState } from 'react';
import './registration.css'; // Import your CSS file

interface FormData {
    fullname: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const validateRegistration = () => {
        const { username, email, password, repeatPassword } = formData;

        if (username && email && password && repeatPassword && password === repeatPassword) {
            alert('Registration successful!');
        } else if (password !== repeatPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="container">
            <div className="regtxt">
            <label id="registertxt">Register</label>
            </div>

            <div id="input-container">
                <div className="firstlast">
                <input
                    type="text"
                    className="firstname"
                    name="firstname"
                    placeholder="      First Name"
                    required
                    value={formData.fullname}
                    onChange={handleChange}
                />

                <input type="text"  placeholder="      Last Name" className="lastname"/>
                </div>

                <input
                    type="email"
                    className="email"
                    name="email"
                    placeholder="      Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    className="user"
                    name="username"
                    placeholder="      Username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                />
                <div className="passre">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="pass"
                    name="password"
                    placeholder="      Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type={showPassword ? 'text' : 'password'}
                    className="repeatPassword"
                    name="repeatPassword"
                    placeholder="      Repeat Password"
                    required
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                </div>

                <div id="showpass">
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={togglePassword}
                    />
                    <label>Show Password</label>
                </div>

                <button type="button" onClick={validateRegistration} className="regbutton" style={{backgroundColor:"red"}}>
                    Register
                </button>
            </div>

            <div className="loginnav">
                <a href="/login" className="login-navi">Already have an account? Login</a>

            </div>
        </div>
    );
};

export default RegistrationForm;
