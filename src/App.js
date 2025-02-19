import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header' //
import Content from './Components/Content'; //
import QuoteAndTipGenerator from './Components/QuoteAndTipGenerator';
import FeaturesSection from './Components/FeaturesSection';
import Products from './Components/Products';
import Services from './Components/Services';
import ComprehensiveIT from './Components/ComprehensiveIT'; //
import Footer from './Components/Footer';  //
import AIPoweredSDLC from './Components/supportservices/AIPoweredSDLC';
import AIConsulting from './Components/supportservices/AIConsulting';
import AIPoweredDataAnalysis from './Components/supportservices/AIPoweredDataAnalysis';
import Nlp from './Components/supportservices/Nlp';
import PredictiveAnalysis from './Components/supportservices/PredictiveAnalysis';
import ComputerVisionSolutions from './Components/supportservices/ComputerVisionSolutions';
import AIPoweredAutomation from './Components/supportservices/AIPoweredAutomation';
import PersonalizationServices from './Components/supportservices/PersonalizationServices';
import AIPoweredCustomerSupport from './Components/supportservices/AIPoweredCustomerSupport';
import AboutUs from './pages/Aboutus'; // Ensure the path to AboutUs component is correct
import Solutions from './pages/Solutions'
import ContactUs from './Components/ContactUs';   //

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
