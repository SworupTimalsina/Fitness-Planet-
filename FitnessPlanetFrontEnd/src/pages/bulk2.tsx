import React from "react";
const Bulk2: React.FC = () => {
    return (
        <div className={"bulker"}>
            <p className="ages">
                Age Between 26-35:
            </p>
            <ul>
                <p className="headings"><u>Caloric Intake:</u></p>
                <li>Consume a caloric surplus of about 300-500 calories per day.</li>
                <li>Distribute calories over 3-4 main meals and 2-3 snacks.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Protein Intake:</u></p>
                <li>Consume around 1.2 to 2.2 grams of protein per kilogram of body weight.</li>
                <li>Prioritize high-quality protein sources.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Carbohydrates and Fats:</u></p>
                <li>Include a variety of nutrient-dense carbohydrates and healthy fats.</li>
                <li>Pay attention to nutrient timing, especially around workouts.</li>
            </ul>
            <br/>

            <ul>
                <p className="headings"><u>Strength Training:</u></p>
                <li>Incorporate progressive overload in your workouts.</li>
                <li>Focus on both strength and hypertrophy training.</li>
            </ul>
        </div>
    );
}
    export default Bulk2;