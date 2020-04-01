import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

const App = () => {
  // state = {clicked: false}
  return (
    <React.StrictMode>
      <div className="container">
        <header>
          <Home />
        </header>
        <Router>
          <Home path="/" exact />
          <About path="/about" />
          <Resume path="/resume" />
          <Project path="/project" />
          <Contact path="/contact" />
        </Router>
      </div >
    </React.StrictMode>
  )
}

export default App;