import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Event Management System</h1>
      <Link to="/events">View Events</Link>
      <Link to="/add-event">Add Event</Link>
    </div>
  );
};

export default Home;
