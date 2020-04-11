import React, { useState } from 'react';
import Navbar from './Navbar.jsx';

const Home = ({ navHome }) => {
  const [fullName] = useState("Vivian Quan");
  const [nameLength, setNameLength] = useState(0);

  const addingLetters = () => {
    setNameLength(nameLength + 1)
  }

  if (nameLength < fullName.length) {
    setTimeout(addingLetters, 120);
  }

  return (
    <div className="home-container" >
      <div className="name-content">
        <h1 className="full-name">{fullName.slice(0, nameLength)}</h1>
        <p className="titles">Software Engineer | Developer | Creator</p>
      </div>
      <Navbar />
    </div >
  )
}

export default Home;


