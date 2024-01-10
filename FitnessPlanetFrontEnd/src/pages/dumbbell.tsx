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

            </section>

            <section className="equipment-section">
                <h2>Jump Ropes</h2>

            </section>

            <section className="equipment-section">
                <h2>Exercise Bikes</h2>

            </section>
        </div>
    );
};

export default Dumbbell;