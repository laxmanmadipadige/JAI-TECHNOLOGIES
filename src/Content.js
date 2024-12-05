import React from 'react';
import './CSS/Hero.css'; // Create a CSS file for styling
import office from './office.jpg'
import { scroller } from 'react-scroll';

function Hero() {
    return (

            <div className="better-together">
                <div className="content">
                    <h2>Seek wisdom, spark conversation, or simply discover a novel perspective.</h2>
                    <h4>Discover unparalleled sophistication and innovation with Jai Technologies, your premier destination for AI-powered products and services.</h4>
                    <div className="buttons">
                    <button onClick={() => scroller.scrollTo("section", { smooth: true })} className="button"> Products</button>
                    <button onClick={() => window.location.href = "solutions"} className="button">Services</button>   
                    </div>
                </div>

                <div className="image-container">
                    <img src={office} alt="Alt description" />
                </div>
                
            </div>
    );
}

export default Hero;