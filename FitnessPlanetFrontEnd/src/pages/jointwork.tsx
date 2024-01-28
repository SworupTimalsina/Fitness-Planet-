import React, {useState} from 'react';
import './jointwork.css';



const JointWorkout: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <head><title>Fitness Planet</title></head>
            <div className="homework-page">
                <nav className="top-buttons">
                    <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                    <div className="buttons">
                        <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                        <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    </div>
                </nav>

                <div className="top-photo-joint">
                    <div className="home-wor-txt">
                        Workouts for <br/>weak joints
                    </div>



                </div>
                <div>
                    <div className="jo-work-but">



                        <button className="ellip" onClick={openModal}>
                            Elliptical
                            Trainer
                        </button>
                        {isModalOpen && (
                            <div className="modal">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <label className="yourpop">Your pop-up content goes here.</label>
                            </div>
                        )}

                        <button className="stat-bike" >
                            Stationary Bikes
                        </button>

                        <button className="row-mach" >
                            Rowing Machines
                        </button>

                        <button className="stepppp">
                            Stepping
                            Machine
                        </button>

                        <button className="vibra">
                            Vibration
                            Plate
                        </button>

                    </div>

                </div>

                <div className="about">
                    <div className="about-buttons">
                        <button>About Us</button>
                        <button>News</button>
                        <button>Privacy Policy</button>

                    </div>
                    <label className="copyright">Copyright © 2023 Fitness planet</label>
                </div>




            </div>
        </>


    );
};

export default JointWorkout;