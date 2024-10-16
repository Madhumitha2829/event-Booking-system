import React, { useEffect, useState } from 'react';
import eventService from '../services/eventService';
import EventCard from './EventCard';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await eventService.getEvents();
      setEvents(fetchedEvents);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
