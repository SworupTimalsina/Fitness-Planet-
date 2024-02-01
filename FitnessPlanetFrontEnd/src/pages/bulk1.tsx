import React from "react";
import './bulk.css';

const Bulk1: React.FC = () => {
    return (
        <div className="bulker">
            <p className="ages">
                Age between 18-25:
            </p>
            <ul>
                <p className="headings"><u>Caloric Intake:</u></p>
                <li>Consume a caloric surplus of about 300-500 calories per day.</li>
                <li>Aim for 3-4 meals and 2-3 snacks.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Consume around 1.2 to 1.5 grams of protein per kilogram of body weight.</li>
                <li>Include lean protein sources such as chicken, fish, lean beef, eggs, and plant-based options.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Include whole grains, fruits, vegetables, and healthy fats.</li>
                <li>Aim for a balanced intake of carbohydrates and fats.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Focus on compound exercises like squats, dead-lifts, bench press, and overhead press.</li>
                <li>Include a mix of strength and hypertrophy (muscle-building) workouts.</li>
            </ul>

        </div>
    );
};

export default Bulk1;