import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import './dashboard.css'; // Import your CSS file


const Dashboard: React.FC = () => {

        const [isHovered1, setHovered1] = useState(false);
        const [isHovered2, setHovered2] = useState(false);
        const [isHovered3, setHovered3] = useState(false);
        const [isHovered4, setHovered4] = useState(false);


    return (
        <div className="homepage">
            <nav className="top-buttons">
                <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
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

                    <button className="dum" onMouseEnter={() => setHovered1(true)}  onMouseLeave={() => setHovered1(false)}> {isHovered1 ? (
                        <div className="hover-text">Pick from<br/> our finest<br/> dumbbells</div>
                    ) : (
                        <div className="dum-text">Dumbbells</div>
                    )}
                    </button>

                    <button className="home-eq" onMouseEnter={() => setHovered2(true)}  onMouseLeave={() => setHovered2(false)}> {isHovered2 ? (
                        <div className="hover1-text">Explore our<br/> home equipments</div>
                    ) : (
                        <div className="home-eq-text"> Home Equipment</div>)}
                    </button>

                    <button className="jump" onMouseEnter={() => setHovered3(true)}  onMouseLeave={() => setHovered3(false)}> {isHovered3 ? (
                        <div className="hover2-text">Jump into<br/>the ropes<br/>section</div>
                    ) : (
                        <div className="jump-text">Jump Ropes</div>)}
                    </button>

                    <button className="bikes" onMouseEnter={() => setHovered4(true)}  onMouseLeave={() => setHovered4(false)}> {isHovered4 ? (
                        <div className="hover3-text">Start your<br/>cardio journey</div>
                    ) : (
                        <div className="bikes-text">Exercise Bikes</div>)}
                    </button>

                </div>
                <button className="browse-btn" >
                    <b>Browse More</b>

                </button>

            </div>
    </div>

);
};

export default Dashboard;
