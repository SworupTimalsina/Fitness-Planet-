import React from 'react';


const Dumbbell: React.FC = () => {
    return (
        <div className="fitness-guide">
            <h1>Fitness Equipment Guide</h1>

            <section className="equipment-section">
                <h2>Dumbbells</h2>
                <p>
                    Dumbbells are versatile pieces of equipment. Follow these steps to use them effectively:
                    <ol>
                        <li>Choose an appropriate weight for your fitness level.</li>
                        <li>Stand with feet shoulder-width apart.</li>
                        <li>Hold a dumbbell in each hand and perform exercises like bicep curls or shoulder presses.</li>

                    </ol>
                </p>
            </section>

            <section className="equipment-section">
                <h2>Home Equipment</h2>
                <p>
                    Home gym equipments are subjects of risk.Please be mindful and follow the given steps to use them effectively:
                    <ol>
                        <li>Read the user manuals for each piece of equipment to understand its features, settings, and safety guidelines. Familiarize yourself with the correct usage of handles, grips, and adjustment points.</li>
                        <li>Focus on maintaining proper form during each exercise to prevent injuries and maximize effectiveness.</li>
                        <li>Use the principle of progressive overload to challenge your muscles and promote growth.</li>

                    </ol>
                </p>

            </section>

            <section className="equipment-section">
                <h2>Jump Ropes</h2>
                <p>
                    Home gym equipments are subjects of risk.Please be mindful and follow the given steps to use them effectively:
                    <ol>
                        <li>Select a jump rope that suits your height. Stand on the middle of the rope, and the handles should reach your armpits.If your jump rope has an adjustable length, make sure it's set according to your height.</li>
                        <li>Don't jump too high; keep your jumps low and controlled.Avoid excessive arm movement; use your wrists to rotate the rope.</li>
                        <li>Begin with a slow, steady pace to establish a rhythm and get used to the movement.Jumping techniques should be mastered by practicing basic jumps on a regular basis.</li>

                    </ol>
                </p>

            </section>

            <section className="equipment-section">
                <h2>Exercise Bikes</h2>
                <p>
                    Home gym equipments are subjects of risk.Please be mindful and follow the given steps to use them effectively:
                    <ol>
                        <li>Set the seat height to hip level. Your knees should have a slight bend at the bottom of the pedal stroke.</li>
                        <li>Sit upright with a straight back and relaxed shoulders.Keep your elbows slightly bent, and grip the handlebars comfortably.</li>
                        <li>Adjust the resistance to your fitness level. Start with a light resistance and gradually increase as you progress.</li>

                    </ol>
                </p>

            </section>
        </div>
    );
};

export default Dumbbell;