import React, {useEffect, useState} from 'react'
import './profile.css';
import logo from '../images/logo.png';
import axios from "axios";
import TopBar from "./components/topbar.tsx";


const Profile: React.FC = () => {
    // interface User{
    //     id: number;
    //     firstName: string;
    //     lastName: string;
    //     email: string;
    //     username: string;
    //     password: string;
    //
    // }
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

    useEffect(() => {
        // Retrieve user ID from local storage or state management
        const userId = localStorage.getItem('userId');

        if (userId) {
            fetchData(userId);
        } else {
            console.error('User ID not found. User may not be logged in.');
        }
    }, []);

    const fetchData = async (userId: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/user/getById/${userId}`);
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

    const handleSubmit = async () => {
        try {
            // Assuming you have the userId available (replace with your actual userId)
            const userId = 1; // Replace with your actual userId

            // Fetch user by ID
            const response = await axios.get(`http://localhost:8080/user/getById/${userId}`);
            const existingUser = response.data;

            if (!existingUser) {
                console.error('User not found for the given ID:', userId);
                return;
            }

            // Update user details
            await axios.put(`http://localhost:8080/user/update/${existingUser.id}`, {
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

            <a href="/" style={{color:'white', position:'absolute', bottom:"40px", right:"30px", fontFamily:"Poppins", fontSize:"25px"}}> <u>Log Out</u> </a>
            </div>

        </>

    );
};

export default Profile;
