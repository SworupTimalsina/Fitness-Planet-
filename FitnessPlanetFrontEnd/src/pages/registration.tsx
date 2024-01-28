import React, { useState } from 'react'
import axios from 'axios';
import './registration.css';
import axios from 'axios'; // Import axios for making HTTP requests

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname: '',
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

    const handleRegistration = () => {
        // Validate the registration data here (similar to your commented-out validation logic)

        // Make a POST request to your backend API
        axios.post('http://localhost:5173/user/save', formData) // Change the URL as needed
            .then((response) => {
                // Handle the response from the server (e.g., show a success message)
                console.log(response.data); // Log the response for debugging
            })
            .catch((error) => {
                // Handle errors (e.g., show an error message)
                console.error('Registration failed:', error);
            });
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
                    placeholder="   First Name"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    className="lastname"
                    name="lastname"
                    placeholder="   Last Name"
                    required
                    value={formData.lastname}
                    onChange={handleChange}/>
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

                <button type="button" className="regbutton" style={{backgroundColor:"red"}} onClick={handleRegistration}>
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
