import React, { useState } from "react";
import "../assets/styles/ComprehensiveIT.css";
import { useAddConsultationMutation } from "../api/consultationApi";
import { Element } from "react-scroll";

const ComprehensiveIT = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [addConsultationMutation, { isLoading }] = useAddConsultationMutation();
  const [submissionStatus, setSubmissionStatus] = useState(null); // Status message for user feedback

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addConsultationMutation({
        id: Date.now().toString(), // Better unique ID
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        text: formData.message,
      });

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setSubmissionStatus("Success! We will contact you soon.");
    } catch (error) {
      setSubmissionStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Element name="contacts">
        <div className="comprehensive-container">
          {/* Left Section */}
          <div className="left-section">
            <div className="header-section">
              <h1>Partner with Us for Comprehensive IT</h1>
            </div>
            <p className="description">
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>

            {/* Benefits Section */}
            <div className="benefits-section">
              <h3>Your benefits:</h3>
              <ul className="benefits-list">
                <li>Client-oriented</li>
                <li>Results-driven</li>
                <li>Independent</li>
                <li>Problem-solving</li>
                <li>Competent</li>
                <li>Transparent</li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="next-steps">
              <h3>What happens next?</h3>
              <div className="steps-list">
                <div className="step">
                  <div className="step-number">1</div>
                  <p>We schedule a call at your convenience</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <p>We do a discovery and consulting meeting</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <p>We prepare a proposal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="right-section">
            <h2>Schedule a Free Consultation</h2>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Company email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">How Can We Help You?</option>
                  <option value="IT Consulting and Advisory">
                    IT Consulting and Advisory
                  </option>
                  <option value="Managed Services">Managed Services</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Custom Solutions">Custom Solutions</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="To better assist you, please describe how we can help..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </button>

              {/* Display submission status */}
              {submissionStatus && (
                <p className="submission-status">{submissionStatus}</p>
              )}
            </form>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default ComprehensiveIT;
