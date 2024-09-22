// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import CreateEvent from './pages/CreateEvent';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </div>  
  );
};

export default App;
