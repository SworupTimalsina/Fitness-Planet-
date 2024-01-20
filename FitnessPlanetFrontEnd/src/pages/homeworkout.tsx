import React, {useState} from 'react';
import './homeworkout.css';



const HomeWorkout: React.FC = () => {

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
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    </div>
                </nav>

                <div className="top-photo-home">
                    <div className="home-wor-txt">
                        Workouts for <br/>weak joints
                    </div>



                </div>
                <div>
                    <div className="ho-work-but">



                        <button className="res" onClick={openModal}>
                            Elliptical
                            Trainer
                        </button>
                        {isModalOpen && (
                            <div className="modal">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <label className="yourpop">Your pop-up content goes here.</label>
                            </div>
                        )}

                        <button className="home-eq-dumb" >
                            Stationary Bikes
                        </button>

                        <button className="fold" >
                            Rowing Machines
                        </button>

                        <button className="all-in-one">
                            Stepping
                            Machine
                        </button>

                        <button className="jum-rop">
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

export default HomeWorkout;