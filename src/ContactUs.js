import React from "react";
import "./CSS/ContactUs.css"
import office from "./pages/images.jpeg" 
import ComprehensiveIT from "./ComprehensiveIT";

const ContactUs = () => {

   
  return (
    <div className="services-container">
      {/* Section 1: Services Header */}
      <div className="services-header">
        <h2>We are here to help</h2>
        <p className="services-subtitle">
        Call us at:1-800-356-8933 <br>
        </br>
        Email us:support@jaitechnologies.com
       </p>
       <button >Schedule a free consulation</button>
      </div>

      {/* Section 2: Image */}
      <div className="services-image">
        <img src={office}
          alt="Office Workspace"
        />
      </div>
      {/* New Section: Comprehensive IT Services */}
      <div className="comprehensive-it">
        <div className="comprehensive-content">
          <h2>Our locations</h2>
          <div className="comprehensive-text">
            <p>
            Our offices are located in Ohio, USA, and Hyderabad, India, and we’d love to show you around. Even if you don’t see an office nearby, we have the resources to support your business, wherever you are.
            </p>
          </div>
        </div>

        
      </div>
      <div className="comprehensive-content">
          <h2>US Location</h2>
          <h4>Columbus</h4>
          <div className="comprehensive-text">
            <p>1900 Polaris Parkway, Suite 450-25, Columbus, OH 43240-4035</p>
          </div>
        </div>

        <div className="comprehensive-content">
          <h2>India Location</h2>
          <h4>Hyderabad</h4>
          <div className="comprehensive-text">
            <p>Plot No 35, Pragathi Nagar, Hyderabad 500062</p>
          </div>
        </div>
        <ComprehensiveIT />
      
    </div>
  );
};

export default ContactUs;
