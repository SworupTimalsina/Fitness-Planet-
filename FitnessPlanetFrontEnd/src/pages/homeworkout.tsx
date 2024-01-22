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

                        <div className="res-div"><button className="res" >
                            Resistance Bands
                        </button>
                        <div className="res-hov-text">

                            Versatile for targeting specific muscle groups through a wide range of motion.<br/>
                            Suitable for rehabilitation exercises and improving flexibility.<br/>
                            Can be easily adjusted for different resistance levels.<br/>
                            Perfect for home or travel workouts.<br/>
                            Come in different resistance levels/colors for progressive training.

                        </div></div>

                        <div className="home-eq-dumb-div">
                            <div className="home-eq-dumb-hov-text">

                                Ideal for unilateral exercises to address muscle imbalances.<br/>
                                Can be used for both compound and isolation exercises.<br/>
                                Provide a more stable and controlled workout compared to some other equipment.<br/>
                                Compact and can be stored under furniture or in a small corner.<br/>
                                Dumbbell exercises engage stabilizing muscles for improved balance.

                            </div><button className="home-eq-dumb" >
                            Dumbbells
                        </button>
                        </div>

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
