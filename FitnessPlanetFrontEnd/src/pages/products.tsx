import React from 'react';
import './products.css';



const Products: React.FC = () => {




    return (
        <div className="parent">




        <div className="products-body">
            <div className="top-buttons">
                <button style={{ backgroundColor: 'black', color: 'white' }} className="profile-button">Profile</button>
                <div className="buttons">
                    <a style={{ backgroundColor: 'black', color: 'white' }} href='#'>Home</a>
                    <a style={{ backgroundColor: 'black', color: 'white' }} href='#'>Products</a>
                    <a style={{ backgroundColor: 'black', color: 'white' }} href='#'>Tracking</a>
                    <a style={{ backgroundColor: 'black', color: 'white' }} href='#'>About Us</a>
                </div>

            </div>
            <div>


                    <div id="categ">
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Treadmills </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Home Gyms </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Jump Ropes </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Exercise Bikes </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Rowing Machines </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Bars </button>
                    <button style={{backgroundColor: "lightgray", color:"black"}}> Core and abdominal </button>
                    </div>



            </div>

        </div>
        </div>

    );
};
export default Products;