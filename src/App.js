import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/add-event" component={AddEvent} />
      </Switch>
    </Router>
  );
};

export default App;
