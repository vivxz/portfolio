import React, { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

const App = () => {
  const [navAbout] = useState(true);
  const [navResume] = useState(true);
  const [navApps] = useState(true);
  const [navContact] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const open = () => setShowDialog(true);
  const roger = () => navigate('/dist') // GO HOME, ROGER!


  useEffect(() => {

  }, [])

  return (
    <React.StrictMode>
      <div className="container">
        <Router>
          <Home path="/" exact />
          <About path="/about" navAbout={navAbout} close={roger} onClick={open} />
          <Resume path="/resume" navResume={navResume} close={roger} onClick={open} />
          <Project path="/apps" navApps={navApps} close={roger} onClick={open} />
          <Contact path="/contact" navContact={navContact} close={roger} onClick={open} />
        </Router>
      </div >
    </React.StrictMode>
  )
}

export default App;