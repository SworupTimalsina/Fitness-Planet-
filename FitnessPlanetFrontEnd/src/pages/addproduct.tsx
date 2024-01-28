








import React, { useState } from 'react';
import './adminpanel.css';

const AddPro: React.FC = () => {
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: 0.0,
        category: '',
    });



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddClick = () => {

        fetch('http://localhost:8080/item/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Item added.")

            })
            .catch((error) => console.error('Error:', error));
    };


    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label>Name</label>
                        <input
                            style={{ width: 610, backgroundColor: "white", color: "black" }}
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="pri-cat">
                        <label>Price</label>
                        <div className="proro">
                            <input
                                style={{ width: 250, backgroundColor: "white", color: "black" }}
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                            <label>Category</label>
                            <select
                                style={{ width: 150, backgroundColor: "white", color: "black" }}
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                            >
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
                        <input
                            style={{ width: 600, height: 250, backgroundColor: "white", color: "black" }}
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="add-two-but">
                        <button className="add-pro-btn">Upload Image</button>
                        <button className="add-pro-btn" onClick={handleAddClick}>Add</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddPro;
