import React from 'react';
import './balance.css';
import TopBar from "./components/topbar.tsx";



const Balance: React.FC = () => {



    return (
        <>
            <head><title>Fitness Planet</title></head>
            <div className="homework-page">
                <TopBar/>

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
