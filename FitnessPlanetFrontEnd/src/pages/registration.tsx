import React, { useState } from 'react';
import './registration.css'; // Import your CSS file

interface FormData {
    firstname: string;
    lastname:string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname:'',
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
        const { firstname, lastname, username, email, password, repeatPassword } = formData;

        if (username && email && password && repeatPassword && password === repeatPassword) {
            alert('Registration successful!');
        } else if (password !== repeatPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div>
            <label id="registertxt">Register</label>

            <div id="input-container">
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                />

                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type={showPassword ? 'text' : 'password'}
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    required
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />

                <div id="showpass">
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={togglePassword}
                    />
                    <label>Show Password</label>
                </div>

                <button type="button" onClick={validateRegistration}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;
