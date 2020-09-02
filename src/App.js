import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "assets/stylesheets/App.css";

import TopValidator from 'pages/TopValidator';
import About from 'pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TopValidator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
