import React from "react";
import './cutter.css';

const Cut4: React.FC = () => {
    return (
        <div className="cutter">
            <p className="ages">
                Age above 46 :
            </p>
            <ul>
                <p className="headings"><u>Caloric Intake:</u></p>
                <li>Adjust caloric intake based on metabolic changes, typically ranging from 1,600 to 2,800 calories per day.</li>
                <li>Prioritize nutrient-dense foods and consider changes in nutritional needs, such as increased calcium and vitamin D for bone health.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Maintain protein intake at 0.6-1.0 grams per pound of body weight, with a focus on preserving muscle mass.</li>
                <li>Consider protein sources that support bone health and overall well-being.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Emphasize whole grains and complex carbohydrates for sustained energy and fiber intake.</li>
                <li>Include heart-healthy fats to support cardiovascular health and joint function.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Include strength training exercises 2 times per week, focusing on maintaining muscle mass, joint flexibility, and overall functional fitness.</li>
                <li>Prioritize exercises that improve balance to reduce the risk of falls and enhance overall mobility.</li>
            </ul>


        </div>
    );
};

export default Cut4;