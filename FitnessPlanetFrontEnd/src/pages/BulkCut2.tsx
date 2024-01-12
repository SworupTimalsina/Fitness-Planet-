import React from 'react';
import './BulkCut2.css'; // Assuming you have a BulkCut2.css file

import Skinny from '../images/Skinny.png';
import Regular from '../images/Regular.png';
import Extra from '../images/Extra.png';

const BulkCut2: React.FC = () => {
    return (
        <div className="container2">
            <h2>Choose your Body Type</h2>
            <nav className="top-buttons">
                <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </nav>

            <div className="bottom-images">
                <div className="image-bottom"><img src={Skinny} width="900" height="200" alt="Skinny"/></div>
                <div className="image-bottom2"><img src={Regular} width="900" height="200" alt="Regular"/></div>
                <div className="image-bottom3"><img src={Extra} width="900" height="200" alt="Extra"/></div>
            </div>
            <div className="submit-button">
                <button type="submit" style={{ backgroundColor: 'red', color: 'black' }}>Submit</button>
            </div>
        </div>

    );
};

export default BulkCut2;
