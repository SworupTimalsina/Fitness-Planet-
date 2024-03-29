import React from "react";
import './cutter.css';

const Cut2: React.FC = () => {
    return (
        <div className="cutter">
            <p className="ages">
                Age Between 26-35:
            </p>
            <ul>
                <p className="headings"><u>Caloric Intake:</u></p>
                <li>Monitor caloric intake based on metabolic changes and individual goals, ranging from 1,800 to 3,000 calories per day.</li>
                <li>Prioritize nutrient-dense foods and consider metabolism changes during this period.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Aim for 0.6-1.0 grams of protein per pound of body weight to support muscle maintenance and overall health.</li>
                <li>Include a mix of protein sources for variety and nutritional benefits.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Balance carbohydrate intake based on activity levels, emphasizing whole foods for sustained energy.</li>
                <li>Include healthy fats for hormonal balance and overall well-being.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Maintain or introduce strength training exercises 2-3 times per week, adjusting intensity and variety to individual preferences.</li>
                <li>Consider incorporating high-intensity interval training (HIIT) for cardiovascular benefits while maintaining muscle mass.</li>
            </ul>


        </div>
    );
};

export default Cut2;