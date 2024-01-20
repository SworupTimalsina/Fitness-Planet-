import React from 'react';
import './homeworkout.css';



const HomeWorkout: React.FC = () => {



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
                        Home Workout Tips
                    </div>



                </div>
                <div>
                    <div className="ho-work-but">

                        <label className="sugges">Workout suggestions to do at home:</label>

                        <button className="res" >
                            Resistance Bands
                        </button>

                        <button className="home-eq-dumb" >
                            Dumbbells
                        </button>

                        <button className="fold" >
                            Foldable Exercise Bench
                        </button>

                        <button className="all-in-one">
                            Compact All-in-One Home Gyms
                        </button>

                        <button className="jum-rop">
                            Jump Ropes
                        </button>

                    </div>

                </div>

                <div className="about">
                    <div className="about-buttons">
                        <button>About Us</button>
                        <button>News</button>
                        <button>Privacy Policy</button>

                    </div>
                    <label className="copyright">Copyright Â© 2023 Fitness planet</label>
                </div>




            </div>
        </>

    );
};

export default HomeWorkout;