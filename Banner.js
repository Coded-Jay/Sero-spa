import React from "react";
import './Banner.css';


const Banner =()=>{
    const handleClick =()=>{
        alert("Thakyou for Booking")
    }
    return(
        <div className="banner">
            <div className="banner-content">
                <h1>Mobile Spa in Abuja</h1>
                <p>Your journey to wellness and serenity starts here</p>
                <button className="banner-button" onClick={handleClick}>Book Appointment</button>
            </div>
        </div>
    );
};
export default Banner;
