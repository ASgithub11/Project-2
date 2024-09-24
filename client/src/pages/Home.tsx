import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');  // Redirect to login page when user clicks on Get Started button or we can change to '/create-event' or 'signup' if that is preferred
  };

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to SocialSync!</h1>
        <p>Your go-to platform for planning community events.</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <img src= {home1} alt="women hugging each other"/>
          <h3>Easy Event Creation</h3>
          <p>Quickly create and manage your events with our user-friendly interface.</p>
        </div>
        <div className="feature-item">
        <img src= {home3} alt="colorful chalk festival"/>
          <h3>Stay Updated</h3>
          <p>Get real-time updates about your events and RSVP confirmations.</p>
        </div>
        <div className="feature-item">
        <img src= {home2} alt="phone recording at concert"/>
          <h3>Connect with Others</h3>
          <p>Engage with your community and find events that interest you.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 EventSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
