import React from 'react';
import './AIServiceBanner.css'; // Import the CSS file


const BenefitsSection = ({ title, description, bulletPoints }) => {
  return (
    <div className="benefits-section">
      <h1 className="benefits-title">{title}</h1>
      <p className="benefits-description">{description}</p>
      {bulletPoints && (
        <ul className="benefits-list">
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <strong>{point.heading}:</strong> {point.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BenefitsSection;
