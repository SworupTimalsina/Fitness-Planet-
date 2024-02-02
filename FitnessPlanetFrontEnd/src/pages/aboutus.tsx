import React from 'react';
import './aboutus.css';
import TopBar from "./components/topbar.tsx";
import logo from "../images/logo.png"


const Article: React.FC = () => {
    return (
        <>
            <TopBar/>
            <div className="ab-bg">

                <div className="ab-txt">
                Welcome to Fitness-Planet, your ultimate destination for all things fitness and wellness! At Fitness-Planet, we believe in empowering individuals to lead a healthy and active lifestyle by providing a curated selection of top-quality fitness products and resources. Whether you're a seasoned fitness enthusiast or just beginning your wellness journey, we've got everything you need to achieve your goals and reach new heights of well-being.
                </div>

                <img className="logo-img" src={logo} width={400} height={400}/>
            </div>

        </>
    );
};

export default Article;