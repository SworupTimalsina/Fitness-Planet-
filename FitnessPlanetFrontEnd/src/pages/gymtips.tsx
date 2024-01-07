import React from 'react';
import './gymtips.css';



const GymTip: React.FC = () => {



    return (
        <>
            <head><title>Fitness Planet</title></head>
            <div className="gym-page">
                <nav className="top-buttons">
                    <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                    <div className="buttons">
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    </div>
                </nav>

                <div className="mann">

                </div>

            </div>
        </>


    );
};

export default GymTip;
