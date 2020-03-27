import React from 'react';
import { Link, navigate } from '@reach/router';

const Navbar = () => {
  const resume = () => navigate('https://bit.ly/39ieym9')
  return (
    <div className="navbar">
      <nav className="nav">
        <Link className="links" to='/about'>About </Link>
        <Link className="links" to='' onClick={resume}>Resume </Link>
        <Link className="links" to='/project'>Project </Link>
        <Link className="links" to='/contact'>Contact </Link>
      </nav>
    </div>
  )
}

export default Navbar;