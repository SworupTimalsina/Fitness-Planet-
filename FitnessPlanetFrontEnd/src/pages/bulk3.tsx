import React from "react";
const Bulk3: React.FC = () => {
    return (
        <div className={"bulker"}>
            <p className="ages">
                Age Between 36-45:
            </p>
            <ul>
                <p className="headings"><u>Caloric Intake:</u></p>
                <li>Consume a caloric surplus of about 200-400 calories per day.</li>
                <li>Balance macronutrients across 3-4 main meals and 1-2 snacks.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Aim for 1.0 to 2.0 grams of protein per kilogram of body weight.</li>
                <li>Include a mix of animal and plant-based protein sources.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Include complex carbohydrates, healthy fats, and a variety of vegetables.</li>
                <li>Adjust carbohydrate intake based on activity level.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Prioritize compound movements and progressive resistance.</li>
                <li>Include a mix of strength, hypertrophy, and endurance training.</li>
            </ul>
        </div>
    );

        }

    export default Bulk3;