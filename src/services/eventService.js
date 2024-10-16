let events = [];

const eventService = {
  getEvents: async () => {
    return events;
  },
  createEvent: async (event) => {
    event.id = events.length + 1; // Simple ID generation
    events.push(event);
  },
};

export default eventService;
