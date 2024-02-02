import React from 'react';
import './balance.css';
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";
import {Link} from "react-router-dom";



const Balance: React.FC = () => {



    return (
        <>
            <head><title>Fitness Planet</title></head>
            <div className="balance-page">
                <TopBar/>

                    <div className="balance-txt">
                        Balance  & Coordination
                    </div>





                <div className="box4">
                    <label className="b-ex"><b>Exercises for Balance:</b></label>
                    <br/> <br/>
                    <div className="balance-but">

                        <Link to="https://www.youtube.com/watch?v=r_6Fzs8nM3g&ab_channel=intosport">
                        <button className="kneedrive">
                            <div className="kneedrive-text">
                                Box Step-up
                                with Knee Drive

                            </div>
                        </button></Link>

                        <Link to="https://www.youtube.com/watch?v=YyEFwt2CjkA&ab_channel=Men'sHealth">
                        <button className="deadlift">
                            <div className="deadlift-text">
                                Single-Leg Romanian Deadlift

                            </div>
                        </button></Link>

                        <Link to="https://www.youtube.com/watch?v=gwWv7aPcD88&ab_channel=HybridAthlete">
                        <button className="lunge">
                            <div className="lunge-text">
                                Lateral Lunge

                            </div>
                        </button></Link>

                        <Link to="https://www.youtube.com/watch?v=l_CUr6SNT9g&ab_channel=FITNIK">
                        <button className="squat">
                            <div className="lunge-text">
                                Bodyweight Squat Jump
                            </div>
                        </button></Link>

                        <Link to="https://www.youtube.com/watch?v=7j-2w4-P14I&ab_channel=NuffieldHealth">
                        <button className="romanian">
                            <div className="romanian-text">
                                Romanian Deadlift
                            </div>
                        </button></Link>

                        <Link to="https://www.youtube.com/watch?v=O28C6YUsyhA&ab_channel=Health%26HighPerformance">
                        <button className="clock">
                            <div className="clock-text">
                                Around the Clock
                            </div>
                        </button></Link>

                    </div>
                </div>

                <label className="c-ex"><b>Exercises for Coordination:</b></label>
                <div className="box3">

                    <Link to="https://www.youtube.com/shorts/KsVDnYHof9Q">
                    <button className="smallball">
                        <div className="smallball-text">
                            Small Ball Toss
                        </div>
                    </button></Link>


                    <Link to="https://www.youtube.com/shorts/rBSgXBeOpX8">
                <button className="target">
                    <div className="target-text">
                        Target Practice
                    </div>
                </button></Link>

                    <Link to="https://www.youtube.com/watch?v=KgkyALRnhxk&ab_channel=ChrisBoyd">
                <button className="hockey">
                    <div className="hockey-text">
                        Balloon Hockey
                    </div>
                </button></Link>

                    <Link to="https://www.youtube.com/shorts/dS2Q0iRtwAY">
                <button className="dribbling">
                    <div className="dribbling-text">
                        Dribbling
                    </div>
                </button></Link>

                    <Link to="https://www.youtube.com/watch?v=KVvmX5NjWUs&ab_channel=TomPetoTraining">
                <button className="rings">
                    <div className="rings-text">
                        Rings
                    </div>
                </button></Link>

                </div>


            </div>

            <BottomBar/>

        </>


    );
};

export default Balance;