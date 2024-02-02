import React, { useState } from 'react';
import './adminpanel.css';

const DeletePro: React.FC = () => {
    const [productName, setProductName] = useState('');

    const handleDeleteClick = async () => {
        try {

            const response = await fetch(`http://localhost:8080/item/deleteByName/${productName}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {

                let errorMessage: string;

                try {

                    const errorResponse = await response.json();
                    errorMessage = errorResponse.message || 'Internal Server Error';
                } catch (jsonError) {
                    // Log the JSON parsing error and the full response content
                    console.error('JSON Parsing Error:', jsonError);
                    console.error('Full Response Content:', await response.text());
                    errorMessage = 'Internal Server Error';
                }
                console.error('Error:', errorMessage);
                return;
            }

            const data = await response.json();
            console.log('Success:', data);

        } catch (error: any) {
            console.error('Error:', error.message);
            // Optionally, provide user feedback here for errors
        }
    };

    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label style={{marginTop:100}}>Name:</label>
                        <input
                            style={{ width: 600, backgroundColor: "white", color: "black", height: 30, borderColor:'white', marginLeft:47, marginTop:100}}
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <button className="del-pro-btn" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default DeletePro;
