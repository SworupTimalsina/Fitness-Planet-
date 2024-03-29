import React from 'react';
import './Bulking.css';

import age18 from '../images/age18.png';
import age26 from '../images/age26.png';
import age36 from '../images/age36.png';
import age46 from '../images/age46.png';
import TopBar from "./components/topbar.tsx";
import {Link} from "react-router-dom";

const Bulking: React.FC = () => {
    return (
        <div className="container2">

            <TopBar/>
            <h2 className="sel">Select Your Age</h2>
            <div className="image-container">
                <Link to="/bulk1">
                    <button className="image"><img src={age18} width="200" height="200"/></button>
                </Link>

                <Link to="/bulk2">
                    <button className="image2"><img src={age26} width="200" height="200"/></button>
                </Link>

                <Link to="/bulk3">
                    <button className="image3"><img src={age36} width="200" height="200"/></button>
                </Link>

                <Link to="/bulk4">
                    <button className="image4"><img src={age46} width="200" height="200"/></button>
                </Link>
            </div>
            {/*<div className="submit-button">*/}
            {/*    <button type="submit" style={{ backgroundColor: 'red', color: 'black' }}>Submit</button>*/}
            {/*</div>*/}\

        </div>


    );
};
export default Bulking;
