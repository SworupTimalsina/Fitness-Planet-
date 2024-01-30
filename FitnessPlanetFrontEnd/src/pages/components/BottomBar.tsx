import React from 'react';
import './BottomBar.css';

const BottomBar: React.FC = () => {
    return (
        <>
            <div className="about">
                <div className="about-buttons">
                    <button className="ab-btn">About Us</button>
                    <button className="ab-btn">News</button>
                    <button className="ab-btn">Privacy Policy</button>

                </div>
                <label className="copyright">Copyright © 2023 Fitness planet</label>
            </div>
        </>
    );
};

export default BottomBar;