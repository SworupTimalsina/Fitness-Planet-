import './review.css';
import dumbell from '../images/Dumbell.png';
import React, {useState} from 'react';
import DescriptionContent from './DescriptionContent.tsx'; // Import your Page1 component
import ReviewContent from "./ReviewContent.tsx";

const Review: React.FC = () => {

    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked); // Toggle the state
    };

    // const [showDescription, setShowDescription] = useState(true); // State to track which page to display

    // const handleToggle = () => {
    //     setShowDescription(!showDescription); // Toggle the state to switch between pages
    // };


    return (
        <body className="reviewbody">
        <div className="page-body">
        <div className="top-buttons">
            <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
            <div className="buttons">
            <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
            </div>

        </div>
<<<<<<< HEAD
            <div className="image"><img src={dumbell}
                                        alt="Product Image"
                                        width="400"
                                        height="400"
                                        /></div>
        </div>
        <div className="change-page"><form className="sliding-page">
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={handleToggle} />
                <span className="slider round">
=======
            <div className="image"><img src={dumbell} width="400" height="400"/></div>
            <div className="change-page"><form className="sliding-page">
                <label className="switch">
                    <input type="checkbox" checked={checked} onChange={handleToggle} />
                    <span className="slider round">
>>>>>>> 8b44b9fc449b4667fb6b59613cf6d632c0961a8b

                </span>
                </label>
                <p>{checked ? <ReviewContent /> : <DescriptionContent />}</p>
            </form></div>

        </div>

        </body>
    );
};
export default Review;