import React from 'react';
import Name from './Name.jsx';
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div className="container">
      <header>
        <Name />
        <Navbar />
      </header>
    </div >
  )
}

export default App;