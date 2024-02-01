import React from "react";
import './cutter.css';

const Cut3: React.FC = () => {
    return (
        <div className="cutter">
            <p>
                Teenagers (18-25):
            </p>
            <ul>
                <p>Caloric Intake:</p>
                <li>Be mindful of caloric intake due to potential metabolic changes, aiming for 1,800 to 2,800 calories per day.</li>
                <li>Focus on nutrient-dense foods to meet nutritional needs within appropriate calorie targets.</li>
            </ul>

            <ul>
                <p>Protein Intake:</p>
                <li>Maintain protein intake at 0.6-1.0 grams per pound of body weight to support muscle health.</li>
                <li>Consider protein sources that promote joint health and overall well-being.</li>
            </ul>

            <ul>
                <p>Carbohydrates and Fats:</p>
                <li>Emphasize whole grains and complex carbohydrates for sustained energy.</li>
                <li>Include heart-healthy fats to support cardiovascular health and hormonal balance.</li>
            </ul>
            <ul>
                <p>Strength Training:</p>
                <li>Continue regular strength training exercises 2-3 times per week, incorporating flexibility exercises for joint health.</li>
                <li>Incorporate variety in training modalities, such as yoga or Pilates, to improve flexibility and balance.</li>
            </ul>


        </div>
    );
};

export default Cut3;