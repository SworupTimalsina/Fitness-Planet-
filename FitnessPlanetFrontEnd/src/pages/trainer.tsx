// import React from 'react';
import "./trainer.css";
import Card from "./components/card.tsx";
import React from "react";

const Trainer: React.FC = () => {
    return (

        <div className="triner-bg">
            <nav className="top-buttons">
                <a href='/login' style={{ backgroundColor: 'black', color: 'white' }} className="profile-button"><b>Profile</b></a>
                <div className="buttons">
                    <a href='/dashboard' style={{ backgroundColor: 'black', color: 'white' }}><b>Home</b></a>
                    <a href='/products' style={{ backgroundColor: 'black', color: 'white' }}><b>Products</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>Tracking</b></a>
                    <a href='#' style={{ backgroundColor: 'black', color: 'white' }}><b>About Us</b></a>
                </div>
            </nav>

            <div className="row">
                <Card
                    title="Adarsh Bajracharya"
                    images="../images/batman.jpg"
                    old_price="9,999"
                    newPrice="99,999"
                    dollar="$"
                    alt="batman"
                    exp_date="10-08-2022"
                />
                <Card
                    title="Aashrit Shrestha"
                    images="../images/blackpanter.png"
                    old_price="599"
                    newPrice="500"
                    dollar="$"
                    alt="blackpanter"
                    exp_date="10-08-2022"
                />
                <Card
                    title="Princy Agrawal"
                    images="../images/arthur.png"
                    old_price="7999"
                    newPrice="7000"
                    dollar="$"
                    alt="arthur"
                    exp_date="10-08-2022"
                />
                <Card
                    title="Sworup Timalsina"
                    images="../images/sworup.jpg"
                    old_price="999"
                    newPrice="500"
                    dollar="$"
                    alt="kashima"
                    exp_date="10-08-2022"
                />
            </div>
        </div>
    );
}

export default Trainer;
