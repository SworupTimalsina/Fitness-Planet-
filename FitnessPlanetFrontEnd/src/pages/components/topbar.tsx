import React from 'react';
import './topbar.css';

const TopBar: React.FC = () => {
    return (
        <>
            <div className="top-buttons">


                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='/aboutus' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>

                <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>

            </div>

        </>
    );
};

export default TopBar;