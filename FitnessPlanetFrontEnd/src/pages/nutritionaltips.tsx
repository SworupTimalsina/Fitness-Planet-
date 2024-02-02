import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import './nutritionaltips.css';
import nutritionaltips from "../images/nutritonaltips.png";
import {useNavigate} from "react-router-dom";
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";



const Nutritionaltips: React.FC = () => {

    const navigate = useNavigate();

    const [tips, setTips] = useState('Click on any button to know more about them');

    const updateTips = (category: string) => {
        let tips: React.ReactNode = '';

        if (category === 'Carbohydrates') {
            tips = (
                <>
                    󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎ 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ 󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠 ‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠 ‎ ‎ ‎ ‎ ‎<u>Carbohydrates</u><br/>
                    <br/>
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
                    󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎   󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠 ‎ ‎ ‎ ‎ ‎ ‎ 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎ 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎ 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠 ‎ ‎ ‎ ‎ ‎<u>Vegetables</u><br/>
                    <br/>
                    1) Leafy Greens (Spinach, Kale): Rich in vitamins, minerals, and antioxidants.<br/>
                    2) Broccoli: High in fiber, vitamins, and contains anti-inflammatory properties.<br/>
                    3) Bell Peppers: Packed with Vitamin C and antioxidants.<br/>
                    4) Tomatoes: Good source of Vitamin C, potassium, and antioxidants.<br/>
                    5) Carrots: Rich in beta-carotene, promoting eye and skin health.
                </>
            );
        }

        if (category === 'Proteins') {
            tips = (
                <>
                    󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ <u>Proteins</u><br/>
                    <br/>
                    1) Chicken Breast: High-quality lean protein with low fat content.<br/>
                    2) Fish (Salmon, Tuna): Rich in omega-3 fatty acids and high-quality protein.<br/>
                    3) Lean Beef: Provides iron, zinc, and B vitamins along with protein.<br/>
                    4) Eggs: Complete protein source, also containing essential nutrients.<br/>
                    5) Legumes (Lentils, Chickpeas): Plant-based protein, rich in fiber and minerals.
                </>
            );
        }

        if (category === 'Additional') {
            tips = (
                <>

                    ‎<br/><br/><br/><br/><br/>
                    󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎ 󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎ ‎󠀠󠀠󠀠󠀠󠀠‎ ‎ ‎ ‎ ‎<u>Additional Tips</u><br/>
                    <br/>
                    1) Nuts and Seeds: Almonds, chia seeds, flaxseeds - rich in healthy fats, protein, and fiber.<br/>
                    2) Greek Yogurt: High in protein and probiotics for gut health.<br/>
                    3) Tofu/Tempeh: Good vegetarian protein sources.<br/>
                    4) Berries: Low in sugar and high in antioxidants.<br/>
                    5) Avocado: Healthy fats and fiber for satiety.<br/>
                    <br/>
                    Balancing these food groups can provide the essential nutrients needed for energy, muscle repair, and overall health during fitness exercises or workouts. It's crucial to maintain a well-rounded diet that includes a variety of these foods to support your fitness goals.
                </>
            );
        }

        // @ts-ignore
        setTips(tips || 'Click on any button to know more about them');
    };

    function toCut(){
        navigate('/cutting')
    }

    function toBulk(){
        navigate('/bulking')
    }


    return (
        <>

            <div>

                <TopBar/>

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

                            <button className="bulkplan" onClick={toBulk}>
                                <div className="bulkplan-text">Bulking Diet Plans</div>
                            </button>

                            <button className="cutting" onClick={toCut}>
                                <div className="cutplan-text">Cutting Diet Plans</div>
                            </button>

                        </div>
                    </div>
                </div>

                <BottomBar/>

            </div>
        </>

    );
};

export default Nutritionaltips;