import React from 'react';
import BlueBackground from '../../assets/Images/background.png';
import BenefitsSection from './BenefitsSection';
import FeaturesGrid from './FeaturesGrid';
import ComprehensiveIT from '../ComprehensiveIT';
import './AIServiceBanner.css';
import coding from '../../assets/Images/coding.avif';
import coding2 from '../../assets/Images/coding2.avif';

const AIPoweredSDLC = () => {
  // Content for the first benefits section
  const benefitsSectionOne = {
    title: 'Benefits of IT Consulting & Advisory by Jai Technologies',
    description:
      'Jai Technologies provides tailored solutions to enhance efficiency, mitigate risks, improve decision-making, and ensure scalability, empowering businesses to stay ahead in today’s competitive landscape.',
    bulletPoints: [
      { heading: 'Enhanced efficiency', text: 'Streamlined operations for optimal productivity and cost-effectiveness.' },
      { heading: 'Risk mitigation', text: 'Secure processes to safeguard against potential threats and vulnerabilities.' },
      { heading: 'Informed decision-making', text: 'Data-driven insights for strategic planning and proactive management.' },
      { heading: 'Scalability solutions', text: 'Future-proofing your business with adaptable infrastructure and scalable technologies.' },
    ],
  };

  // Content for the features grid
  const featuresSectionOne = [
    { title: 'Strategic Planning', description: 'Tailored strategies aligning IT with business objectives for maximum impact.' },
    { title: 'Technology Integration', description: 'Seamlessly integrate cutting-edge technologies for enhanced performance and productivity.' },
    { title: 'Cybersecurity Solutions', description: 'Comprehensive measures to safeguard data and protect against cyber threats.' },
    { title: 'IT Infrastructure Optimization', description: 'Optimize infrastructure to support current needs and future growth effectively.' },
  ];

  // Content for the second features grid
  const featuresSectionTwo = [
    { title: 'Technical Implementation', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
    { title: 'IT Helpdesk Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
    { title: 'Managed IT Services', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
    { title: 'IT Consulting', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
    { title: 'Network Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
    { title: 'Field Tech Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
  ];

 
  return (
    <>
      {/* Banner Section */}
      <div className="ai-banner-container">
        <div className="ai-banner-content">
          <div className="ai-banner-tag">SERVICES</div>
          <h1 className="ai-banner-title">AI-Powered SDLC</h1>
          <p className="ai-banner-description">
          Streamline phases, boost productivity, automate code analysis, testing. Propel projects with speed, accuracy, innovation          </p>
          <button className="ai-banner-button">Schedule a Free Consultation</button>
        </div>
        <img
          src={BlueBackground}
          alt="AI Background"
          className="ai-banner-background"
        />
      </div>

      {/* Reusable Benefits Section */}
      <BenefitsSection
        title={benefitsSectionOne.title}
        description={benefitsSectionOne.description}
        bulletPoints={benefitsSectionOne.bulletPoints}
      />

<div className="features-and-images">
<FeaturesGrid features={featuresSectionOne} />
<img src={coding} alt="Coding" className="side-image" />
</div>

      {/* Reusable Features Grid */}

      {/* Second Benefits Section */}
      <BenefitsSection
        title="Cutting-edge tools that drive performance"
        description="If your technology is draining resources rather than optimizing them, we can get you back on track. A professionally managed services provider can give you the decisive edge to:"
      />
    <div className="features-and-images">
  
    <img src={coding2} alt="Coding2" className="side-image" />
    </div>


      {/* Second Features Grid */}
      <FeaturesGrid features={featuresSectionTwo} />

      {/* Comprehensive IT Section */}
      <ComprehensiveIT />


      </>
  );
};

export default AIPoweredSDLC;