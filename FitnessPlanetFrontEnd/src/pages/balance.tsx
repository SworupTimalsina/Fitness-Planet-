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
                        <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                        <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                        <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                    </div>
                </nav>

                <div className="top-photo-bal">
                    <div className="hom-wor-txt">
                        Balance <br/> Coordination
                    </div>



                </div>



                <div className="box">
                    <br/> <br/>
                    <div className="plate-but">

                        <button className="veggie">
                            <div className="veggie-text">
                                Box Step-up
                                with Knee Drive

                            </div>
                        </button>

                        <button className="protein">
                            <div className="protein-text">
                                Single-Leg Romanian Deadlift

                            </div>
                        </button>

                        <button className="carbo">
                            <div className="carbo-text">
                                Lateral Lunge

                            </div>
                        </button>

                        <button className="additionaltips">
                            Bodyweight Squat Jump

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

export default Balance;
