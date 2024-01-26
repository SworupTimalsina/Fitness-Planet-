import React, { useState } from 'react';
import './adminpanel.css';

const DeletePro: React.FC = () => {
    const [productName, setProductName] = useState('');

    const handleDeleteClick = () => {
        fetch(`http://localhost:8080/item/deleteByName/${productName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label>Name</label>
                        <input
                            style={{ width: 300 }}
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <button className="add-pro-btn" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default DeletePro;
