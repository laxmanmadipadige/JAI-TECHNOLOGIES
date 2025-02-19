import React from 'react';
import '../assets/styles/Hero.css'; // Import CSS file for styling
import office from '../assets/Images/office.jpg'; // Import image asset
import { scroller } from 'react-scroll'; // Import scroller for smooth scrolling functionality

// Hero Component
function Hero() {
    return (
        <div className="better-together">
            {/* Content Section */}
            <div className="content">
                <h2>Seek wisdom, spark conversation, or simply discover a novel perspective.</h2>
                <h4>Discover unparalleled sophistication and innovation with Jai Technologies, your premier destination for AI-powered products and services.</h4>
                
                {/* Buttons for navigation */}
                <div className="buttons">
                    {/* Scroll to products section smoothly */}
                    <button onClick={() => scroller.scrollTo("section", { smooth: true })} className="button"> Products</button>
                    
                    {/* Navigate to the solutions page */}
                    <button onClick={() => window.location.href = "solutions"} className="button">Services</button>   
                </div>
            </div>

            {/* Image Section */}
            <div className="image-container">
                <img src={office} alt="Office environment" />
            </div>
        </div>
    );
}

export default Hero;
