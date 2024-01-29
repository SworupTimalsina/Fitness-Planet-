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
                // Optionally, provide user feedback here for errors
                return;
            }

            const data = await response.json();
            console.log('Success:', data); // Log the success data
            // Optionally, provide user feedback here

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
