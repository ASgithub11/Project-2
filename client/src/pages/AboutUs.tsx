import React from 'react';
import './AboutUs.css';
import aboutus1 from '../assets/images/aboutus1.png';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <header className="hero"><h1>About Us</h1>
      <p>SocialSync is a platform for community-driven events. Our goal is to help people connect with local activities and initiatives.</p>
      </header>
     <div className="mission"> <img src={aboutus1} alt="a sign that says good vibes only"/>
     <div className="mission-text">
      <h2>Our Mission</h2>
      <p>We believe in building stronger communities through engagement, collaboration, and shared experiences.</p>
      {/* Add additional information here */}
      </div>
      </div>
    </div>
  );
};

export default About;
