import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file

const Dashboard: React.FC = () => {
    // const history = useHistory();

    const createFitnessPlan = () => {
        alert('Redirect to create fitness plan page or perform desired action.');
        // You can replace the alert with actual logic to navigate or perform an action
    };

    return (
        <div>
          <nav>
              <a href="profile.html">Profile</a>
            <a href="dashboard.html">Home</a>
         <a href="products.html">Products</a>
         <a href="tracking.html">Tracking</a>
         <a href="aboutus.html">About Us</a>
     </nav>


    <button onClick={createFitnessPlan}>
        CLICK HERE
    </button>
    </div>
);
};

export default Dashboard;
