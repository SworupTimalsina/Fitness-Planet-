import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './nutritionaltips.css';
import nutritionaltips from "../images/nutritonaltips.png";



const Nutritionaltips: React.FC = () => {
    const [tips, setTips] = useState('Click on any button to know more about them');

    const updateTips = (category: string) => {
        let tips: React.ReactNode = '';

        if (category === 'Carbohydrates') {
            tips = (
                <>
                    1) Quinoa: High-protein grain, rich in fiber and various nutrients.<br/>
                    2) Sweet Potatoes: Packed with vitamins, fiber, and antioxidants.<br/>
                    3) Brown Rice: Complex carbohydrate source with fiber and minerals.<br/>
                    4) Oats: Great for sustained energy, high in fiber and various nutrients.<br/>
                    5) Whole Grain Pasta/Bread: Provides sustained energy and fiber.
                </>
            );
        }

        if (category === 'Vegetables') {
            tips = (
                <>
                    Veggies
                    1) Quinoa: High-protein grain, rich in fiber and various nutrients.<br/>
                    2) Sweet Potatoes: Packed with vitamins, fiber, and antioxidants.<br/>
                    3) Brown Rice: Complex carbohydrate source with fiber and minerals.<br/>
                    4) Oats: Great for sustained energy, high in fiber and various nutrients.<br/>
                    5) Whole Grain Pasta/Bread: Provides sustained energy and fiber.
                </>
            );
        }

        if (category === 'Proteins') {
            tips = (
                <>
                    Proteins
                    1) Quinoa: High-protein grain, rich in fiber and various nutrients.<br/>
                    2) Sweet Potatoes: Packed with vitamins, fiber, and antioxidants.<br/>
                    3) Brown Rice: Complex carbohydrate source with fiber and minerals.<br/>
                    4) Oats: Great for sustained energy, high in fiber and various nutrients.<br/>
                    5) Whole Grain Pasta/Bread: Provides sustained energy and fiber.
                </>
            );
        }

        if (category === 'Additional') {
            tips = (
                <>
                    Additional
                    1) Quinoa: High-protein grain, rich in fiber and various nutrients.<br/>
                    2) Sweet Potatoes: Packed with vitamins, fiber, and antioxidants.<br/>
                    3) Brown Rice: Complex carbohydrate source with fiber and minerals.<br/>
                    4) Oats: Great for sustained energy, high in fiber and various nutrients.<br/>
                    5) Whole Grain Pasta/Bread: Provides sustained energy and fiber.
                </>
            );
        }

        // @ts-ignore
        setTips(tips || 'Click on any button to know more about them');
    };
    return (
        <>

        <div>
            <nav className="top-buttons">
                <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </nav>

        </div>

    <div className="nutritionaltips">

        <div className="nutrition">
            <label className="n-text">Nutritional Tips</label>

            <div className="n-image"><img src={nutritionaltips} width="500" height="500"/></div>
        </div>


            <div className="balancedplate">
                <div className="abc">
                <label className="plate-text">A Balanced Plate<br/></label>
                <label className="plate-text2">contains:</label>
                </div>
                <div className="box">
                    <br/> <br/>
                    <div className="but-form">
                    <div className="plate-but">

                    <button className="veggie" onClick={() => updateTips('Vegetables')}>
                        <div className="veggie-text">Vegetables</div>
                    </button>

                    <button className="protein" onClick={() => updateTips('Proteins')}>
                        <div className="protein-text"> Proteins</div>
                    </button>

                    <button className="carbo" onClick={() => updateTips('Carbohydrates')}>
                        <div className="carbo-text">Carbohydrates</div>
                    </button>

                    <button className="additionaltips" onClick={() => updateTips('Additional')}></button>

                </div>
                        <form className="more-tips">
                            <b>{tips}</b></form>
                    </div>
                </div>

            </div>

        <div className="fitnesstips">
            <div className="xyz">
                <label className="plate-text">Nutritional Fitness<br/></label>
                <label className="plate-text2">Tips For:</label>
            </div>
                <div className="box2">
                    <br/> <br/>
        <div className="fitness-but">

            <button className="bulkplan">
                <div className="bulkplan-text">Bulking Diet Plans</div>
            </button>

            <button className="cutting">
                <div className="cutplan-text">Cutting Diet Plans</div>
            </button>
                </div>
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

export default Nutritionaltips;