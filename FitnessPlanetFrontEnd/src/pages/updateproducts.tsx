import React, { useState } from 'react';
import './adminpanel.css';

const UpdatePro: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const handleSearchClick = () => {
        fetch(`http://localhost:8080/item/getByName/${name}`)
            .then(response => response.json())
            .then(data => {
                setPrice(data.price);
                setCategory(data.category);
                setDescription(data.description);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value));
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

    // Add your update logic here

    return (
        <>
            <div className="addupdel-bg">
                <div className="add-holder">
                    <div className="name-div">
                        <label>Name</label>
                        <input style={{ width: 610, backgroundColor: 'white', color: 'black' }} value={name} onChange={handleNameChange} />
                        <button onClick={handleSearchClick}>Search</button>
                    </div>

                    <div className="pri-cat">
                        <label>Price</label>
                        <div className="proro">
                            <input style={{ width: 250, backgroundColor: 'white', color: 'black' }} value={price} onChange={handlePriceChange} />
                            <label>Category</label>
                            <select style={{ width: 150, backgroundColor: 'white', color: 'black' }} value={category} onChange={handleCategoryChange}>
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
                        <input style={{ width: 600, height: 250, backgroundColor: 'white', color: 'black' }} value={description} onChange={handleDescriptionChange} />
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
