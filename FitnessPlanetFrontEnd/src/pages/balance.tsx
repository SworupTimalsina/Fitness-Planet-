import React from 'react';
import './balance.css';



const Balance: React.FC = () => {



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

                <div className="top-photo-bal">
                    <div className="hom-wor-txt">
                        Balance  & Coordination
                    </div>



                </div>



                <div className="box">
                    <br/> <br/>
                    <div className="plate-but">

                        <button className="kneedrive">
                            <div className="kneedrive-text">
                                Box Step-up
                                with Knee Drive

                            </div>
                        </button>

                        <button className="deadlift">
                            <div className="deadlift-text">
                                Single-Leg Romanian Deadlift

                            </div>
                        </button>

                        <button className="lunge">
                            <div className="lunge-text">
                                Lateral Lunge

                            </div>
                        </button>

                        <button className="squat">
                            <div className="lunge-text">
                                Bodyweight Squat Jump
                            </div>
                        </button>

                        <button className="romanian">
                            <div className="romanian">
                                Romanian Deadlift
                            </div>
                        </button>

                        <button className="clock">
                            <div className="clock-text">
                                Around the Clock
                            </div>
                        </button>

                        <button className="row">
                            <div className="row-text">
                                Cable Row
                            </div>
                        </button>

                        <button className="plank">
                            <div className="plank-text">
                                Plank
                            </div>
                        </button>

                        <button className="toss">
                            <div className="toss-text">
                                Ballon Toss
                            </div>
                        </button>

                        <button className="juggling">
                            <div className="Juggling-text">
                                Juggling
                            </div>
                        </button>

                    </div>
                </div>
                <div className="box3">
                    <button className="smallball">
                        <div className="smallball-text">
                            Small Ball Toss
                        </div>
                    </button>

                </div>
                <button className="target">
                    <div className="target-text">
                        Target Practise
                    </div>
                </button>

                <button className="hockey">
                    <div className="hockey-text">
                        Balloon Hockey
                    </div>
                </button>

                <button className="dribbling">
                    <div className="dribbling-text">
                        Dribbling
                    </div>
                </button>

                <button className="rings">
                    <div className="rings-text">
                        Rings
                    </div>
                </button>

                <button className="bounce">
                    <div className="bounce-text">
                        Wall Ball Bounce
                    </div>
                </button>


            </div>




            <div className="about">
                <div className="about-buttons">
                    <button>About Us</button>
                    <button>News</button>
                    <button>Privacy Policy</button>

                </div>
                <label className="copyright">Copyright Â© 2023 Fitness planet</label>
            </div>

            <BottomBar/>

        </>


    );
};

export default Balance;