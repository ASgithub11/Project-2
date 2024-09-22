// The Navgation bar component for the website which contains links to the Home page, Events page and Login/Signup page

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">YourLogo</div>    {/* We can add Logo of our website here */}
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
