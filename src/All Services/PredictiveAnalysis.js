import React from 'react';
import BlueBackground from '../Images/background.png';
import BenefitsSection from './BenefitsSection';
import FeaturesGrid from './FeaturesGrid';
import ComprehensiveIT from '../ComprehensiveIT';
import './AIServiceBanner.css';
import coding from '../Images/coding.avif';
import coding2 from '../Images/coding2.avif';

function PredictiveAnalysis(){

    const blockChainSectionOne = {
        title: 'Benefits of IT Consulting & Advisory by Jai Technologies',
        description:
          'Are you busy putting out IT fires instead of focusing on your core business? If your technology is draining resources rather than optimizing them, Netsurit can get you back on track. A professionally managed services provider can give you the decisive edge to: Technologies provides tailored solutions to enhance efficiency, mitigate risks, improve decision-making, and ensure scalability, empowering businesses to stay ahead in today’s competitive landscape.',
        bulletPoints: [
          {text:'Grow your business while our experts handle your technology.'},
          {text:'Get more done with information technology that increases productivity and efficiency.'},
          {text:'Eliminate budgeting surprises with a flat monthly rate for comprehensive IT coverage.'},
          {text:'Protect your business and your data from unexpected problems and unwanted intruders.'}
        ],
      };
    
      const blockChainfeaturesSectionOne = [
        { title: 'IT Service for You', description: 'We know that every businesses’ needs are completely different from the next, so we offer packages for any business size or budget.' },
        { title: 'Predictable Costs 24/7', description: 'We doesn’t charge you more when your network is down or a server fails. Our flat-rate fee programs covers all of that whenever you need it done.' },
        { title: 'Keeping Your Team Productive', description: 'Our managed services include round-the-clock monitoring of your key infrastructure, computers and network servers.' },
        { title: 'Our Team is Ready to Help', description: 'Part of what makes our managed services so exceptional is that we are always available, regardless of time or holiday.' },
         
      ];
      const blockChainfeaturesSectionTwo = [
        { title: 'Technical Implementation', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
        { title: 'IT Helpdesk Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
        { title: 'Managed IT Services', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
        { title: 'IT Consulting', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
        { title: 'Network Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
        { title: 'Field Tech Support', description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.' },
      ];
     
      return (
        <>
    
          <div className="ai-banner-container">
            <div className="ai-banner-content">
              <div className="ai-banner-tag">SERVICES</div>
              <h1 className="ai-banner-title">Digital Transformation</h1>
              <p className="ai-banner-description">
                Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?
              </p>
              <button className="ai-banner-button">Schedule a Free Consultation</button>
            </div>
            <img
              src={BlueBackground}
              alt="AI Background"
              className="ai-banner-background"
            />
          </div>
          <BenefitsSection
          title={blockChainSectionOne.title}
          description={blockChainSectionOne.description}
          bulletPoints={blockChainSectionOne.bulletPoints} />

<div className="features-and-images">
<FeaturesGrid features={blockChainfeaturesSectionOne}    />
<img src={coding} alt="Coding" className="side-image" />
</div>
    
          <BenefitsSection
            title="Cutting-edge tools that drive performance"
            description="If your technology is draining resources rather than optimizing them, we can get you back on track. A professionally managed services provider can give you the decisive edge to:"
          />



        <div className="features-and-images">
        <img src={coding2} alt="Coding2" className="side-image" />
        </div>
    
          <FeaturesGrid features={blockChainfeaturesSectionTwo}    />
          <ComprehensiveIT />
    </>    
  )


}
export default PredictiveAnalysis;
