// ComparePop.tsx
import React from 'react';
import './comparepop.css';
import dumbell from "../images/Dumbell.png";

const ComparePop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="compare-pop">
            <div className="compare-pop-content">

                <div className="leftcom">

                <img src={dumbell} width="250" height="250" className="img"/>
                <h2>Adjustable Dumbbell Weights-<br/>24kg(1 unit)</h2>

                </div>




                <div className="separator"></div>


                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ComparePop;
