import React from 'react';
import './AIServiceBanner.css'; // Import the CSS file

const FeaturesGrid = ({ features }) => {
  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <span className="icon">✔️</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
