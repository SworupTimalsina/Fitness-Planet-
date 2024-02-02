import React, {useState} from 'react';
import './jointwork.css';
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";
import {Link} from "react-router-dom";



const JointWorkout: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>



            <div className="homework-page">
                <TopBar/>

                <div className="top-photo-joint">
                    <div className="home-wor-txt">
                        Fitness tips and <br/> workout guidance.
                    </div>



                </div>
                <div>
                    <div className="jo-work-but">

                        <Link to="/dumbbell">
                        <button className="ellip" onClick={openModal}>
                            Step by Step guide
                        </button> </Link>
                        {isModalOpen && (
                            <div className="modal">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <label className="yourpop">Your pop-up content goes here.</label>
                            </div>
                        )}

                        <Link to="/warmup">
                        <button className="stat-bike" >
                            Warm Ups
                        </button></Link>

                        <Link to="/challenges">
                        <button className="row-mach" >
                            Challenges
                        </button></Link>

                        <Link to="/balance">
                        <button className="stepppp">
                            Balance and
                            Coordination
                        </button></Link>

                        <Link to="/flexibility">
                        <button className="vibra">
                            Flexibility Exercises
                        </button></Link>

                    </div>

                </div>

                <BottomBar/>

            </div>
        </>


    );
};

export default JointWorkout;