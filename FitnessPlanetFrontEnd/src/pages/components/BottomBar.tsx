import React from 'react';
import './BottomBar.css';
import {Link} from "react-router-dom";

const BottomBar: React.FC = () => {
    return (
        <>
            <div className="about">
                <div className="about-buttons">
                    <Link to="/aboutus"><button className="ab-btn3">About Us</button></Link>
                    <Link to="/article"><button className="ab-btn2">News</button></Link>
                    <button className="ab-btn">Privacy Policy</button>

                </div>
                <label className="copyright">Copyright © 2023 Fitness planet</label>
            </div>
        </>
    );
};

export default BottomBar;