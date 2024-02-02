import React from 'react';
import './balance.css';
import BottomBar from "./components/BottomBar.tsx";
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
            </div>

            <BottomBar/>

        </>


    );
};

export default Balance;