import './review.css';
import dumbell from '../images/Dumbell.png';
import React, {useState} from 'react';
// import Description from './Description.tsx'; // Import your Page1 component

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
        <div>
        <div className="top-buttons">
            <button style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></button>
            <div className="buttons">
            <button style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></button>
            <button style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></button>
            <button style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></button>
            <button style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></button>
            </div>

        </div>
            <div className="image"><img src={dumbell} width="400" height="400"/></div>
        </div>
        <div className="change-page"><form className="sliding-page">
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={handleToggle} />
                <span className="slider round">

                </span>
            </label>
            <p>{checked ? 'Enabled' : 'Disabled'}</p>
        </form></div>

        </body>
    );
};
export default Review;