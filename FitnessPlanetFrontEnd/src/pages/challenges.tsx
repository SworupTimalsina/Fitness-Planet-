import React from 'react';
import './challenges.css';
import challenge from '../images/challenges.png';


interface FitnessAdviceProps {
    // You can extend this interface based on your needs
}

const Challenges: React.FC<FitnessAdviceProps> = () => {
    return (
        <div className="Challenge-parts">
        <div className="challenge-contents">
            <h2 className="topic-challenge">Overcoming Common Fitness Challenges for Beginners</h2>
            <p><b>
                As a novice, embarking on a fitness journey can be challenging. Here are some tips to help you overcome common challenges:
            </b></p>
            <ul className="items-color">
                <li>Set realistic goals.</li>
                <li>Stay consistent with workouts.</li>
                <li>Balance cardio and strength training.</li>
                <li>Listen to your body and avoid overtraining.</li>
                <li>Eat a balanced and nutritious diet.</li>
                <li>Get enough rest and prioritize sleep.</li>
                <li>Find a workout buddy or join a fitness community for support.</li>
                <li>Celebrate small victories along the way.</li>
                <li>Explore different types of exercises to keep things interesting.</li>
                <li>Consider consulting with a fitness professional to create a personalized plan.</li>
                <li>Stay hydrated and pay attention to your body's signals.</li>
                <li>Include flexibility and mobility exercises in your routine.</li>
                <li>Be patient with yourself; progress is a journey, not a destination.</li>
                <li>Track your progress to see how far you've come.</li>
                <li>Set aside time for both physical and mental well-being.</li>
            </ul>
            <p>
                <b>Note:</b> Remember, consistency is key, and progress takes time. Don't hesitate to seek guidance from fitness professionals and enjoy the journey to a healthier lifestyle!
            </p>
        </div>
            <img src={challenge} width="800px"/>
        </div>
    );
};

export default Challenges;

