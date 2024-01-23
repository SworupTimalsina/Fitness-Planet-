import React from 'react';
import './adminpanel.css';


const DeletePro: React.FC = () => {
    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label>Name</label>
                        <input style={{width : 300}}/>
                    </div>



                    <button className="add-pro-btn">Delete</button>




                </div>
            </div>

        </>
    );
};

export default DeletePro;