import React from 'react';
// import { useHistory } from 'react-router-dom';
import './dashboard.css'; // Import your CSS file


const Dashboard: React.FC = () => {


    return (
        <div className="homepage">
            <nav className="top-buttons">
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </nav>

            <div className="createplan">
                <button className="createfit">CLICK HERE</button>

            </div>

            <div className="blackbg">

            </div>
            <div className="quote">
                <br/>
                <br/>
              <div className="sta">Start your fitness journey.</div>

            </div>

            <div className="our-prodcuts">
                <label className="pro-text">Our Products</label>
                <div>
                    <a href="#" className="dumbel"></a>
                    <a href="#" className="dumbel"></a>
                    <a href="#" className="dumbel"></a>
                </div>

            </div>
    </div>
);
};

export default Dashboard;
