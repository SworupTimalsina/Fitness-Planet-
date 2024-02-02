import React from 'react';
import './flexibility.css';
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";

const Flexibility: React.FC = () => {
    return (
        <>

            <TopBar/>
    <div className="flexibility-guide">
        <div className="txt-flex">
        <label className="flexibility-exercise">FLEXIBILITY EXERCISES</label>
        </div>

            <div className="flexible">
                <p><u>
                    Dynamic Stretching:</u>
                    <ol>
                        Begin your workout with dynamic stretches like leg swings, arm circles, or hip rotations.<br/>
                        This helps to increase blood flow and prepares your muscles for more intense activity.

                    </ol>
                </p><br></br>

                <p><u>
                    Static Stretching:</u>
                    <ol>
                        After your workout, include static stretches focusing on major muscle groups.<br/>
                        Hold each stretch for 15-30 seconds, ensuring you feel a gentle pull but not pain.

                    </ol>
                </p><br></br>

                <p><u>
                    Include Yoga or Pilates:</u>
                    <ol>

                        These disciplines not only improve flexibility but also enhance strength and balance.<br/>
                        Consider adding a yoga or Pilates session to your weekly routine.
                    </ol>
                </p><br></br>

                <p><u>
                    Consistency is Key:</u>
                    <ol>

                        Aim for regular flexibility sessions, at least 2-3 times per week.<br/>
                        Consistency will lead to gradual improvements in flexibility over time.
                    </ol>

                </p><br></br>

                <p><u>
                    Breathe Deeply:</u>
                    <ol>
                        Deep, controlled breathing helps relax your muscles during stretching.<br/>
                        Inhale deeply through your nose, and exhale slowly through your mouth.
                    </ol>
                </p><br></br>

                <p><u>
                    Listen to Your Body:</u>
                    <ol>
                        Pay attention to how your body responds to stretching.<br/>
                        Avoid pushing yourself too hard, especially if you feel pain. Stretch to the point of mild discomfort and hold.
                    </ol>
                </p><br></br>

                <p><u>
                    Focus on Problem Areas:</u>
                    <ol>
                        Identify areas of your body that are less flexible and give them extra attention.<br/>
                        This targeted approach can help address specific needs.
                    </ol>
                </p><br></br>

            </div>


        </div>
            <BottomBar/>
        </>

    );
};

export default Flexibility;