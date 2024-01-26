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

                                I. Bicep Curls:<br/>
                                1) Setup: Stand on the center of the band with feet shoulder-width apart.<br/>
                                2) Grip: Hold one end of the band in each hand, palms facing forward.<br/>
                                3) Execution: Curl your hands towards your shoulders, keeping elbows close to your body.<br/>
                                4) Repetition: Perform 3 sets of 12-15 reps.
                                <br/><br/>
                                II. Seated Row:<br/>
                                1) Setup: Secure the band around a fixed point at chest height.<br/>
                                2) Grip: Sit on the floor with legs extended, hold the band with both hands.<br/>
                                3) Execution: Pull the band towards you, squeezing your shoulder blades.<br/>
                                4) Repetition: Perform 3 sets of 12-15 reps.

                            </div></div>

                        <div className="home-eq-dumb-div">
                            <div className="home-eq-dumb-hov-text">

                                I. Goblet Squats:<br/>
                                1) Setup: Hold a dumbbell vertically with both hands close to your chest.<br/>
                                2) Stance: Stand with feet shoulder-width apart.<br/>
                                3) Execution: Lower your body into a squat, keeping the dumbbell close to your chest.<br/>
                                4) Repetition: Perform 3 sets of 10-12 reps.
                                <br/><br/>
                                II. Overhead Shoulder Press:<br/>
                                1) Setup: Sit or stand with a dumbbell in each hand at shoulder height.<br/>
                                2) Execution: Press the dumbbells overhead until your arms are fully extended.<br/>
                                3) Repetition: Perform 3 sets of 10-12 reps.

                            </div><button className="home-eq-dumb" >
                            Dumbbells
                        </button>
                        </div>

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
                    <label className="copyright">Copyright © 2023 Fitness planet</label>
                </div>




            </div>
        </>

    );
};

export default HomeWorkout;