import React from 'react';
import '../assets/styles/Products.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const Services = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to navigate to the Solutions page
  const handleViewAllSolutions = () => {
    navigate('/solutions'); // Navigate to the Solutions route
  };

  return (
    <div className="products-container">
      {/* Header Section */}
      <h1 className="products-header">Services</h1>

      {/* Services Grid Section */}
      <div className="products-grid">
        
        {/* Service 1: AI-Powered SDLC */}
        <div className="product-card">
          <h3>AI-Powered SDLC</h3>
          <p>
            Transform your SDLC with AI solutions: From start to finish, our advanced algorithms boost productivity, efficiency, and quality. 
            Automate code analysis, predictive maintenance, testing, and more. Propel your projects with speed, accuracy, and innovation.
          </p>
          <a href="aisdlc" className="learn-more">Learn more</a> {/* Link to more details */}
        </div>

        {/* Service 2: AI Consulting */}
        <div className="product-card">
          <h3>AI Consulting</h3>
          <p>
            Offering expertise in implementing AI solutions tailored to specific business needs, including strategy development, 
            solution design, and implementation support.
          </p>
          <a href="aiconsulting" className="learn-more">Learn more</a>
        </div>

        {/* Service 3: AI-Powered Data Analysis */}
        <div className="product-card">
          <h3>AI-Powered Data Analysis</h3>
          <p>
            Leveraging advanced algorithms and machine learning techniques to analyze large datasets, extract insights, 
            and drive data-driven decision-making.
          </p>
          <a href="aipowereddataanalysis" className="learn-more">Learn more</a>
        </div>

        {/* Service 4: NLP Solutions */}
        <div className="product-card">
          <h3>Natural Language Processing (NLP) Solutions</h3>
          <p>
            Developing NLP-based applications for tasks such as sentiment analysis, language translation, chatbots, and text summarization.
          </p>
          <a href="nlp" className="learn-more">Learn more</a>
        </div>

        {/* Service 5: Computer Vision Solutions */}
        <div className="product-card">
          <h3>Computer Vision Solutions</h3>
          <p>
            Providing computer vision solutions for tasks such as image recognition, object detection, facial recognition, and video analytics.
          </p>
          <a href="computervisionsolutions" className="learn-more">Learn more</a>
        </div>

        {/* Service 6: Predictive Analytics */}
        <div className="product-card">
          <h3>Predictive Analytics</h3>
          <p>
            Building predictive models using machine learning algorithms to forecast trends, identify patterns, and make proactive business decisions.
          </p>
          <a href="pa" className="learn-more">Learn more</a>
        </div>
      </div>

      {/* Button to navigate to all solutions */}
      <button onClick={handleViewAllSolutions} className="contact-btn">View All Solutions</button>
    </div>
  );
};

// Exporting the Services component
export default Services;
