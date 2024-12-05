import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import QuoteAndTipGenerator from './Components/QuoteAndTipGenerator';
import FeaturesSection from './FeaturesSection';
import Products from './Products';
import Services from './Services';
import ComprehensiveIT from './ComprehensiveIT';
import Footer from './Footer';
import AIPoweredSDLC from './All Services/AIPoweredSDLC';
import AIConsulting from './All Services/AIConsulting';
import AIPoweredDataAnalysis from './All Services/AIPoweredDataAnalysis';
import Nlp from "./All Services/Nlp";
import PredictiveAnalysis from './All Services/PredictiveAnalysis';
import ComputerVisionSolutions from './All Services/ComputerVisionSolutions';
import AIPoweredAutomation from './All Services/AIPoweredAutomation';
import PersonalizationServices from './All Services/PersonalizationServices';
import AIPoweredCustomerSupport from './All Services/AIPoweredCustomerSupport';
import AboutUs from './pages/Aboutus'; // Ensure the path to AboutUs component is correct
import Solutions from './pages/Solutions'
import ContactUs from './ContactUs';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    {/* Navigation */}
                    
                   <Header />
                   
                   
                   
                   
                    {/* <Solutions />  */}

                    {/* Define Routes */}
                    <Routes>
                        {/* Home Route */}
                        <Route 
                            path ="/solutions"
                            element ={
                             <>
                                
                                <Solutions />
                                <Services />
                                <ComprehensiveIT />
                                <Footer />

                            </>
                            }
                            />
                        <Route
                            path="/"
                            element={
                                <>
                                    <Content />
                                    <QuoteAndTipGenerator />
                                    <FeaturesSection />
                                    <Products />
                                    <Services />
                                    <ComprehensiveIT />
                                    <Footer />
                                </>
                            }
                        />
                        
                        {/* About Us Route */}
                        <Route path="/aboutus" element={<AboutUs />} />

                        {/* AI Powered SDLC Route */}
                        <Route path="/aisdlc" element={<AIPoweredSDLC />} />
                        <Route path="/aiconsulting" element={<AIConsulting />} />
                        <Route path="/aipowereddataanalysis" element={<AIPoweredDataAnalysis />} />
                        <Route path="/nlp" element={<Nlp />} />
                        <Route path="/computervisionsolutions" element={<ComputerVisionSolutions />} />
                        <Route path="/pa" element={<PredictiveAnalysis />} />
                        <Route path="/aia" element={<AIPoweredAutomation/>} />
                        <Route path="/personalizationservices" element={<PersonalizationServices/>} />
                        <Route path="/support" element={<AIPoweredCustomerSupport/>} />
                        <Route path="/contactus" element={<ContactUs />} />
                    </Routes>
                    
                </header>
            </div>
        </Router>
    );
}

export default App;
