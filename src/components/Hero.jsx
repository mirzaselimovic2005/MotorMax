import React from "react";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-container_item">
                <h1>Welkom bij MotorMax</h1>
                <p>De beste motor meet app van Nederland.</p>
                <a href="#feed"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg>Bekijk meetings.</a> 
            </div>
        </div>
    );
}

export default Hero;
