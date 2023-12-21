import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import './dashboard.css'; // Import your CSS file


const Dashboard: React.FC = () => {

        const [isHovered, setHovered] = useState(false);


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
                <div className="pro-but">
                    <button className="dum" onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)}> {isHovered && <div className="hover-text"></div>} <div className="dum-text"> Dumbells </div> </button>
                    <button className="home-eq"> Home Equipment</button>
                    <button className="jump"> Jump Ropes</button>
                    <button className="jump"> Jump Ropes</button>
                </div>
                <button className="browse-btn" >
                    <b>Browse More</b>

                </button>

            </div>
    </div>
);
};

export default Dashboard;
