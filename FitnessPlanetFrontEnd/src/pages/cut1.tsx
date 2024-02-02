import React from "react";
import './cutter.css';

const Cut1: React.FC = () => {
    return (
        <div className="cutter">
            <p className="ages">
               Age between 18-25:
            </p>
            <ul>
                <p className="headings"><u>Calorie Intake:</u></p>
                <li>Adjust caloric intake based on individual goals, activity levels, and metabolism, typically ranging from 1,800 to 3,000 calories per day.</li>
                <li>Prioritize nutrient-dense foods and mindful eating to support overall health and fitness.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Aim for 0.6-1.0 grams of protein per pound of body weight to support muscle development and recovery.</li>
                <li>Diversify protein sources, including lean meats, dairy, legumes, and plant-based options.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Balance carbohydrate intake based on activity levels, emphasizing whole grains, fruits, and vegetables.</li>
                <li>Include healthy fats from sources like olive oil, avocados, nuts, and fatty fish.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Incorporate strength training exercises 2-3 times per week, focusing on compound movements and progressive overload.</li>
                <li>Prioritize compound movements such as squats, deadlifts, and bench presses for overall muscle development.</li>
            </ul>


        </div>
    );
};

export default Cut1;