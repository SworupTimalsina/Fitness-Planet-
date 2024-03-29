import React from 'react';
import './article.css';

import Baree from "../images/Barre.jpg";
import pack from "../images/6pack.jpg";
import run from "../images/run.jpg";
import row from "../images/row.jpg";
import hitt from "../images/hitt.jpg";
import skip from "../images/skip.jpg";
import gun from "../images/gun.jpg";
import burn from "../images/burn.jpg";
import TopBar from "./components/topbar.tsx";


const Article: React.FC = () => {
    return (
        <>
            <TopBar/>
            <div className="arti">
                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/potential-health-benefits-of-barre/" target="_blank" rel="noopener noreferrer">
                        <div className="image1"><img src={Baree} width="320" height="500" alt="Barre"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Potential Health Benefits of Barre</p>
                    </a>
                </div>

                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/what-you-should-know-about-getting-abs/" target="_blank" rel="noopener noreferrer">
                        <div className="image2"><img src={pack} width="320" height="500" alt="6 Pack"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>What You Should Know About Getting Abs</p>
                    </a>
                </div>

                <div className="image-box">
                    <a href="https://www.everydayhealth.com/healthy-living/fitness/why-some-people-seem-to-never-sweat-when-they-work-out-and-when-its-a-problem/" target="_blank" rel="noopener noreferrer">
                        <div className="image3"><img src={run} width="320" height="500" alt="Run"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Why Some People Seem to Never Sweat When They Work Out</p>
                    </a>
                </div>

                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/rowing-machine-workouts/guide/" target="_blank" rel="noopener noreferrer">
                        <div className="image4"><img src={row} width="320" height="500" alt="Row"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Guide to Rowing Machine Workouts</p>
                    </a>
                </div>

                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/potential-health-benefits-of-hiit/" target="_blank" rel="noopener noreferrer">
                        <div className="image5"><img src={hitt} width="320" height="500" alt="HIIT"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Potential Health Benefits of HIIT</p>
                    </a>
                </div>

                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/best-strength-exercises-for-runners/" target="_blank" rel="noopener noreferrer">
                        <div className="image6"><img src={skip} width="320" height="500" alt="Skip"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Best Strength Exercises for Runners</p>
                    </a>
                </div>



                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/everything-you-need-to-know-about-massage-guns/" target="_blank" rel="noopener noreferrer">
                        <div className="image7"><img src={gun} width="320" height="500" alt="Skip"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>Everything You Need to Know About Massage Guns</p>
                    </a>
                </div>


                <div className="image-box">
                    <a href="https://www.everydayhealth.com/fitness/factors-that-can-affect-how-many-calories-you-burn/" target="_blank" rel="noopener noreferrer">
                        <div className="image7"><img src={burn} width="320" height="500" alt="Skip"/></div>
                        <p className="image-caption"style={{ color: 'black' }}>6 Factors That Can Affect How Many Calories You Burn</p>
                    </a>
                </div>

            </div>
        </>
    );
};

export default Article;