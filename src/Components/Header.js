import React, { useState } from 'react';
import '../assets/styles/Header.css'; // Import CSS styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Navbar Component
const Navbar = () => {
    // State variables to manage dropdown visibility
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

    const navigate = useNavigate(); // Hook for navigation

    // Function to navigate to the Contact Us page
    const handleContactUs = () => {
        navigate('/contactus');
    };

    // Function to toggle dropdown visibility based on the selected category
    const toggleDropdown = (dropdown) => {
        switch (dropdown) {
            case 'products':
                setIsProductsDropdownOpen(!isProductsDropdownOpen);
                break;
            case 'services':
                setIsServicesDropdownOpen(!isServicesDropdownOpen);
                break;
            case 'company':
                setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
                break;
            case 'blog':
                setIsBlogDropdownOpen(!isBlogDropdownOpen);
                break;
            default:
                break;
        }
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <h1><a href="/">
                    <span className="black-letter">J</span>
                    <span className="highlight">AI</span>
                </a></h1>
                <p className="subtext">TECHNOLOGIES</p>
            </div>

            {/* Navigation Links */}
            <div className="nav-links-container">
                <ul className="nav-links">
                    {/* Products Dropdown */}
                    <li className="dropdown" onMouseEnter={() => toggleDropdown('products')} onMouseLeave={() => toggleDropdown('products')}>
                        <a href="#products">Products<i className="bi bi-caret-down-fill"></i></a>
                        {isProductsDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#product1">CogniTip</a></li>
                                    <li><a href="#product2">CogniQuotes</a></li>
                                    <li><a href="#product3">CogniStar</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* Services Dropdown */}
                    <li className="dropdown" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
                        <a href="solutions">Services<i className="bi bi-caret-down-fill"></i></a>
                        {isServicesDropdownOpen && (
                            <div className="services-dropdown-menu">
                                <div className="services-grid">
                                    {/* Services Section */}
                                    <div className="services-section">
                                        <h3>Services</h3>
                                        <ul>
                                            <li><a href="aisdlc">AI-Powered SDLC</a></li>
                                            <li><a href="aiconsulting">AI Consulting</a></li>
                                            <li><a href="aipowereddataanalysis">AI-Powered Data Analysis</a></li>
                                            <li><a href="nlp">Natural Language Processing (NLP)</a></li>
                                            <li><a href="computervisionsolutions">Computer Vision Solutions</a></li>
                                        </ul>
                                    </div>

                                    {/* Industry Focus Section */}
                                    <div className="industry-focus">
                                        <h3>Industry Focus</h3>
                                        <ul>
                                            <li>Healthcare</li>
                                            <li>Finance</li>
                                            <li>Retail and E-commerce</li>
                                            <li>Manufacturing</li>
                                            <li>Automotive</li>
                                        </ul>
                                        <a href="#view-all" className="view-all-link">View All</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Company Dropdown */}
                    <li className="dropdown" onMouseEnter={() => toggleDropdown('company')} onMouseLeave={() => toggleDropdown('company')}>
                        <a href="#company">Company<i className="bi bi-caret-down-fill"></i></a>
                        {isCompanyDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#mission">Mission</a></li>
                                    <li><a href="#team">Our Team</a></li>
                                    <li><a href="#careers">Careers</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* Blog Dropdown */}
                    <li className="dropdown" onMouseEnter={() => toggleDropdown('blog')} onMouseLeave={() => toggleDropdown('blog')}>
                        <a href="#blog">Blog<i className="bi bi-caret-down-fill"></i></a>
                        {isBlogDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#blog1">Blog Post 1</a></li>
                                    <li><a href="#blog2">Blog Post 2</a></li>
                                    <li><a href="#blog3">Blog Post 3</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* Additional Link: About Us */}
                    <li><a href="aboutus">About us</a></li>
                </ul>
            </div>

            {/* Contact Button */}
            <button onClick={handleContactUs} className="contact-btn">Contact us</button>
        </nav>
    );
};

export default Navbar;
