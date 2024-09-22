import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

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
          <h3>Easy Event Creation</h3>
          <p>Quickly create and manage your events with our user-friendly interface.</p>
        </div>
        <div className="feature-item">
          <h3>Stay Updated</h3>
          <p>Get real-time updates about your events and RSVP confirmations.</p>
        </div>
        <div className="feature-item">
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
