// The Navgation bar component for the website which contains links to the Home page, Events page and Login/Signup page

import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className='nav-bar-links'>
                <li><Link to="/">Home</Link></li>   {/* Link to the Home page */}
                <li><Link to="/events">Events</Link></li>   {/* Link to the Events page */}
                <li><Link to="/login">Login/Signup</Link></li>   {/* Link to Login/Signup page */}
            </ul>
        </nav>
    );
};

export default Navbar;