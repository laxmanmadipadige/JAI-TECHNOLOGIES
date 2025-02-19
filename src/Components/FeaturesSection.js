import React from 'react';
import '../assets/styles/FeaturesSection.css'; // Import CSS for styling

// Import feature icons
import Cost from "../assets/Images/Cost-effectiveness.svg";
import Industry from '../assets/Images/Industry.svg';
import Innovative from '../assets/Images/Innovative.svg';
import Scalability from '../assets/Images/Scalability.svg';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      {/* Header Section */}
      <div className="header">
        <button className="header-button">WHAT WE DO</button>
        <h1>Simplifying IT for a complex world.</h1>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {/* Feature: Cost-effectiveness */}
        <div className="feature">
          <img src={Cost} alt="Cost-effectiveness" />
          <h3>Cost-effectiveness</h3>
          <p>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
        </div>

        {/* Feature: Innovative Technology */}
        <div className="feature">
          <img src={Innovative} alt="Innovative Technology" />
          <h3>Innovative Technology</h3>
          <p>We stay up-to-date with the latest technology trends and offer innovative solutions.</p>
        </div>

        {/* Feature: Industry Expertise */}
        <div className="feature">
          <img src={Industry} alt="Industry Expertise" />
          <h3>Industry Expertise</h3>
          <p>We specialize in serving specific industries and offer tailored solutions.</p>
        </div>

        {/* Feature: Scalability */}
        <div className="feature">
          <img src={Scalability} alt="Scalability" />
          <h3>Scalability</h3>
          <p>Our solutions are scalable and can grow with your business for maximum investment value.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
