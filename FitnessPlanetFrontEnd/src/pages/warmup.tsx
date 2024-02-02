import React from 'react';
import './warmup.css';
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";

const Warmup: React.FC = () => {
    return (
        <div className="fitness-guide">
            <TopBar/>

            <label className="warmup-exercise"><b>WARMUP EXERCISES:-</b></label>

            <section className="warmup">
                <p><u>
                    Gradual Intensity:</u>
                    <ol>
                        <li>Start with low-intensity exercises and gradually increase the intensity..</li>
                        Warm up should last 5-10 minutes.

                    </ol>
                </p><br></br>

                <p><u>
                    Dynamic Movements:</u>
                    <ol>
                        <li>Focus on dynamic movements that engage multiple muscle groups.</li>
                        Avoid static stretches before your workout; save those for post-exercise.

                    </ol>
                </p><br></br>

                <p><u>
                    Joint Mobility:</u>
                    <ol>

                        <li>Include movements that promote joint mobility, especially for areas prone to injury.</li>
                    </ol>
                </p><br></br>

                <p><u>
                    Sport-Specific:</u>
                    <ol>

                        <li>Tailor your warm-up to the specific demands of your workout or sport.</li>
                    </ol>

                </p><br></br>

                <p><u>
                    Cardiovascular Warm-up:</u>
                    <ol>
                        <li>Incorporate light aerobic exercises to increase heart rate and warm up your cardiovascular system.</li>
                    </ol>
                </p><br></br>

                <p><u>
                    Jumping Jacks:</u>
                    <ol>
                        <li>Engages the whole body and increases heart rate.</li>
                    </ol>
                </p><br></br>

                <p><u>
                    Leg Swings:</u>
                    <ol>
                        <li>Improves hip mobility and warms up leg muscles.</li>
                    </ol>
                </p><br></br>

                <p><u>
                    Arm Circles:</u>
                    <ol>
                        <li>Loosens up shoulders and increases blood flow.</li>
                    </ol>
                </p><br></br>

                <p><u>
                    High Knees:</u>
                    <ol>
                        <li>Loosens up shoulders and increases blood flow.</li>
                    </ol>
                </p><br></br>





            </section>

            <section className="warmup2">
                <p><u>
                    Bodyweight Squats:</u>
                    <ol>
                        <li>Activates the lower body muscles.</li>

                    </ol>
                </p><br></br>

                <p><u>
                    Dynamic Lunges and Hip Circles:</u>
                    <ol>
                        <li>Works on leg strength and flexibility.Enhances hip mobility and flexibility.</li>

                    </ol>
                </p><br></br>

                <p><u>
                    Shoulder Rolls:</u>
                    <ol>
                        <li>Loosens up the shoulders and upper back.</li>

                    </ol>
                </p><br></br>

                <p><u>
                    Plank with Shoulder Taps & Butt Kicks:</u>
                    <ol>
                        <li>Loosens up the shoulders and upper back.Activates the core and upper body.</li>

                    </ol>
                </p><br></br>

                <p><u>
                    Side Lunges & Rotational Torso Twists:</u>
                    <ol>
                        <li>Engages the inner and outer thighs.Improves spinal mobility.</li>

                    </ol>
                </p><br></br>


                <p><u>
                    Calf Raises & Mountain Climbers:</u>
                    <ol>
                        <li>Warms up the calves and ankles.Engages the core and promotes cardiovascular fitness.</li>

                    </ol>
                </p><br></br>
            </section>
            <BottomBar/>
        </div>

    );
};

export default Warmup;