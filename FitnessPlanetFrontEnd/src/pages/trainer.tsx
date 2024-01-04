import './trainer.css';

import React from 'react';


const Trainers: React.FC = () => {

    interface Trainers {
        id: number;
        name: string;
        price: number;
    }

    interface TrainerCardProps {
        trainer: Trainers;
    }

    const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }} className="trainers-cards">
            <h3>{trainer.name}</h3>
            <p>Price: Rs. {trainer.price}</p>
            {/* Add more product details as needed */}
            <button>Hire Trainer</button>
        </div>
    );

    const trainer: Trainers[] = [
    { id: 1, name: 'Adarsh Bajracharya', price: 500000 },
    { id: 2, name: 'Sworup Timalsina', price: 100 },
    // Add more products as needed
    { id: 3, name: 'Aashrit Shrestha', price: 20},
    { id: 4, name: 'Suyogya Makaju Shrestha', price: 4999 },
    { id: 5, name: 'Nissan Rai', price: 5 },
        { id: 6, name: 'Princy Agrawal', price: 70000 },
        ]


    return (
        <>
            <div className="top-buttons">
                <a href='#' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>

            </div>
        <div className="trainer-body">
            <h1>Browse Trainer</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' , width: '60%'}} className="train">
                {trainer.map((trainer) => (
                    <TrainerCard key={trainer.id} trainer={trainer}/>
                ))}
            </div>

        </div>

        </>
    );
};
export default Trainers;