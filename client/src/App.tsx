import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { retrieveEvents } from '../src/api/eventAPI';
import { Route, Routes } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import CreateEvent from './pages/CreateEvent';
import EventDetail from './pages/EventDetail';
import { Event } from './types/Event';

const App = () => {
  const [events, setEvents] = useState<Event[]>([]);
  useNavigate();

  useEffect(() => {
    // Fetch events from an API or use static data
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await retrieveEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
    }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetail events={events} />} />
      </Routes>
    </div>  
  );
};

export default App;
