import React, { useState } from 'react';
import './dashboard.css';
import {Link, useNavigate} from 'react-router-dom';
import BottomBar from "./components/BottomBar.tsx";
import TopBar from "./components/topbar.tsx";



const Dashboard: React.FC = () => {
        const navigate = useNavigate();

        const [isHovered1, setHovered1] = useState(false);
        const [isHovered2, setHovered2] = useState(false);
        const [isHovered3, setHovered3] = useState(false);
        const [isHovered4, setHovered4] = useState(false);

    function toPro() {
        // Use Link component to navigate to the Products page with 'Dumbbells' category
        navigate('/products', { state: { category: 'Dumbbells' } });
    }
        //
        // function toHome(){
        // navigate('/homeworkout')
        // }

        function toNutri(){
            navigate('/nutrition')
        }


    return (
        <>
        <head><title>Fitness Planet</title></head>
        <div className="homepage">
        <TopBar/>
            <div className="createplan">
                {/*<button className="createfit">CLICK HERE</button>*/}

            </div>

            <div className="blackbg">

            </div>
            <div className="quote">
                <br/>
                <br/>
              <div className="sta">Start your fitness journey.</div>

            </div>

            <div className="our-products">
                <label className="pro-text">Our Products</label>
                <div className="pro-but">

                    <button className="dum" onMouseEnter={() => setHovered1(true)}  onMouseLeave={() => setHovered1(false)} onClick={toPro}> {isHovered1 ? (
                        <div className="hover-text">Pick from<br/> our finest<br/> dumbbells</div>
                    ) : (
                        <div className="dum-text">Dumbbells</div>
                    )}
                    </button>

                    <button className="home-eq" onMouseEnter={() => setHovered2(true)}  onMouseLeave={() => setHovered2(false)}> {isHovered2 ? (
                        <div className="hover1-text">Explore our<br/> home equipments</div>
                    ) : (
                        <div className="home-eq-text"> Home Equipment</div>)}
                    </button>

                    <button className="jump" onMouseEnter={() => setHovered3(true)}  onMouseLeave={() => setHovered3(false)}> {isHovered3 ? (
                        <div className="hover2-text">Jump into<br/>the ropes<br/>section</div>
                    ) : (
                        <div className="jump-text">Jump Ropes</div>)}
                    </button>

                    <button className="bikes" onMouseEnter={() => setHovered4(true)}  onMouseLeave={() => setHovered4(false)}> {isHovered4 ? (
                        <div className="hover3-text">Start your<br/>cardio journey</div>
                    ) : (
                        <div className="bikes-text">Exercise Bikes</div>)}
                    </button>

                </div>
                <Link to='/products'>
                <button className="browse-btn" >
                    <b>Browse More</b>
                </button>
            </Link>


            </div>

            <div className="quote2">
                <br/>
                <br/>
                <div className="sta">Let's Begin.</div>

            </div>

            <div className="beginnertips">
                <label className="bt-text">Beginner Tips</label>
                <div className="bt-but">
            <Link to='/homeworkout'>
            <button className="homeworkout">Home Workout Tips</button>
            </Link>
                    <div className="sepbuttons">

                        <Link to='/gymtips'>
                <button className="gym">Gym Tips</button>
                        </Link>

                <button className="nutritional" onClick={toNutri}>Nutritional Tips</button>
                    </div>
                </div>
            </div>
            <BottomBar/>

            {/*<MessengerCustomerChat*/}
            {/*    pageId="185039364700360"*/}
            {/*    appId="628231029368079"*/}
            {/*/>*/}
    </div>
        </>


);
};

export default Dashboard;
