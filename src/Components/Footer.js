import React from 'react';
import '../assets/styles/Footer.css'; // Import the CSS file for styling

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
          <li><a href='aisdlc'>AI-Powered SDLC</a></li>
            <li><a href='aiconsulting'>AI Consulting</a></li>
            <li><a href='aipowereddataanalysis'>AI-Powered Data Analysis</a></li>
            <li><a href='nlp'>Natural Language Processing (NLP) Solutions</a></li>
            <li><a href='computervisionsolutions'>Computer Vision Solutions</a></li>
            <li><a href='pa'>Predictive Analytics</a ></li>
            <li><a href='aia'>AI-Powered Automation</a></li>
            <li><a href='personalizationservices'>Personalization Services</a></li>
            <li><a href='support'>AI-Powered Customer Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="aboutus">About us</a></li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 JAI Technologies</p>
      </div>
    </footer>
  );
}

export default Footer;