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

                        <div className="res-div"><div className="res-div"><button className="res" >
                            Resistance Bands
                        </button>

                                </div></div><button className="home-eq-dumb" >
                            Dumbbells
                        </button>

                        <div className="fold-div"><button className="fold" >
                            Foldable Exercise Bench
                        </button>
                            <div className="fold-hov-text">

                                I. Bench Press:<br/>
                                <br/>
                                1) Setup: Adjust the bench to a flat position.<br/>
                                2) Position: Lie on your back, gripping dumbbells or a barbell.<br/>
                                3) Execution: Lower the weights to chest level and press back up.<br/>
                                4) Repetition: Perform 3 sets of 8-10 reps.

                            </div></div>

                        <div className="all-in-one-div">
                            <div className="all-in-one-hov-text">

                                I. Lat Pulldown:<br/>
                                <br/>
                                1) Setup: Attach a cable or band to the high pulley.<br/>
                                2) Grip: Sit facing the machine, grasp the bar with a wide overhand grip.<br/>
                                3) Execution: Pull the bar down to your chest, squeezing your back muscles.<br/>
                                4) Repetition: Perform 3 sets of 10-12 reps.

                            </div><button className="all-in-one" >
                            Compact all-in-one home gyms
                        </button>
                        </div>

                        <div className="jum-rop-div"><button className="jum-rop" >
                            Jump Ropes
                        </button>
                            <div className="jum-rop-hov-text">

                                I. Basic Jumping:<br/>
                                <br/>
                                1) Setup: Hold the handles of the jump rope at hip level.<br/>
                                2) Stance: Stand with feet together.<br/>
                                3) Execution: Swing the rope over your head and jump as it approaches your feet.<br/>
                                4) Repetition: Jump continuously for 10-15 minutes.

                            </div></div>

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
