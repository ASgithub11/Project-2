// The Navgation bar component for the website which contains links to the Home page, Events page, About Us, and Login/Signup page

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/SocialSync-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img className="logo" src={logo} alt="SocialSync Logo" />
                </div>    {/* Inserted the logo */}
            <ul className='nav-bar-links'>
                <li><Link to="/">Home</Link></li>   {/* Link to the Home page */}
                <li><Link to="/events">Events</Link></li>   {/* Link to the Events page */}
                <li><Link to="/about">About Us</Link></li>   {/* Link to the About Us page */}
                <li><Link to="/login">Login</Link></li>   {/* Link to Login page */}
                <li><Link to="/signup">Signup</Link></li>   {/* Link to Signup page */}
            </ul>
        </nav>
    );
};

export default Navbar;
