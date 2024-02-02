import React from 'react';
import './topbar.css';
import prof from './pfp.png'

const TopBar: React.FC = () => {
    return (
        <>
            <div className="top-buttons">


                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='/order' style={{ backgroundColor: 'black', color: 'white' }}><b>History</b></a>
                    <a href='/aboutus' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>

                <a href='/profile' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b><img src={prof} width={80}/></b></a>

            </div>

        </>
    );
};

export default TopBar;