import React from 'react';
import './BulkCut.css';

import age18 from '../images/age18.png';
import age26 from '../images/age26.png';
import age36 from '../images/age36.png';
import age46 from '../images/age46.png';

const BulkCut: React.FC = () => {
    return (
        <div className="container2">
            <h2>Select Your Age</h2>
            <nav className="top-buttons">
                <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </nav>
            <div className="image-container">
                    <div className="image"><img src={age18} width="300" height="300"/></div>
                    <div className="image2"><img src={age26} width="300" height="300"/></div>
                    <div className="image3"><img src={age36} width="300" height="300"/></div>
                    <div className="image4"><img src={age46} width="300" height="300"/></div>
            </div>
            <div className="submit-button">
                <button type="submit" style={{ backgroundColor: 'red', color: 'black' }}>Submit</button>
            </div>
        </div>

    );
};
export default BulkCut;
