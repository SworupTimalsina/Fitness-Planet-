import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import './profile.css';
import logo from '../images/logo.png';
import axios from "axios";
import TopBar from "./components/topbar.tsx";

const Profile: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        const togglePassword = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        };

        const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
        };

        const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
        };

        const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
        };

        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };

        const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/getById/1`);
            const user = response.data;

            console.log('Fetched user:', user);

            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
            setUsername(user.username || '');
            setEmail(user.email || '');
            setPassword(user.password || ''); // Set password to an empty string or the user's actual password if you want to display it

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };



        useEffect(() => {
            fetchData();
        }, []);

        const handleSubmit = async () => {
            try {
                // Assuming you have an endpoint to update user details
                await axios.post('http://localhost:8080/user/save', {
                    id: 1,
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                });
                console.log('User details updated successfully!');
            } catch (error) {
                console.error('Error updating user details:', error);
            }
        };


    return (
        <>
            <TopBar/>

        <div className="container-ss">
            {/*<div className="p-txt">*/}
            {/*    <label id="profile-txt">Profile</label>*/}
            {/*</div>*/}
                <div id="input-container">
                    <div className="firstlast">
                        <input
                            type="text"
                            className="first-name"
                            name="firstname"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                    </div>

                    <div className="firstlast">
                        <input
                            type="text"
                            className="last-name"
                            name="lastname"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>

                    <div className="firstlast">
                        <input
                            type="text"
                            className="u-ser"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>

                    <div className="firstlast">
                        <input
                            type="email"
                            className="e-mail"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>

                    <div className="passre">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="p-ass"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
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

                    <button
                        type="button"
                        className="update-btn"
                        style={{ backgroundColor: 'red' }}
                        onClick={handleSubmit}
                    >
                        Update
                    </button>
                </div>
                <img src={logo} className="logo" />
            </div>
        </>

    );
};

export default Profile;
