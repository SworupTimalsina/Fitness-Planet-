import React, { useState } from 'react'
import './registration.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


interface FormData {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;

}

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',

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
        const formDataWithoutId = (({ id, ...rest }) => rest)(formData);

        axios.post('http://localhost:8080/user/save', formDataWithoutId)
            .then(response => {
                console.log('Registration successful:', response.data);
                alert("Registered Succesfully");
                navigate('/login');
            })
            .catch(error => {
                console.error('Registration failed:', error.message);
                alert("Please fill in all the details correctly")
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
                    name="firstName"
                    placeholder="   First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    className="lastname"
                    name="lastName"
                    placeholder="   Last Name"
                    required
                    value={formData.lastName}
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
