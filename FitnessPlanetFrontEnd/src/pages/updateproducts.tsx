import React from 'react';
import './adminpanel.css';


const UpdatePro: React.FC = () => {
    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label>Name</label>
                        <input style={{width : 610 , backgroundColor: "white", color:"black"}}/>
                    </div>

                    <div className="pri-cat">
                        <label>Price</label>
                        <div className="proro">
                            <input style={{width : 250, backgroundColor: "white", color:"black"}}/>
                            <label>Category</label>
                            <select style={{width : 150, backgroundColor: "white", color:"black"}}>

                                <option>Treadmill</option>
                                <option>Home Gyms</option>
                                <option>Jump Ropes</option>
                                <option>Exercise Bikes</option>
                                <option>Rowing Machines</option>
                                <option>Pull Up and Push Up Bar</option>
                                <option>Core and Abdominal Trainers</option>

                            </select>

                        </div>
                    </div>
                    <div className="des-div">
                        <label>Description</label>
                        <input style={{width : 600, height: 250, backgroundColor: "white", color:"black"}}/>
                    </div>
                    <div className="add-two-but">
                        <button className="add-pro-btn">Upload Image</button>
                        <button className="add-pro-btn">Update</button>
                    </div>



                </div>
            </div>

        </>
    );
};

export default UpdatePro;