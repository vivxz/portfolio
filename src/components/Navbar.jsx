import React from 'react';
import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <Link className="links" to='/about'>About </Link>
        <Link className="links" to='/resume'>Resume </Link>
        <Link className="links" to='/project'>Project </Link>
        <Link className="links" to='/contact'>Contact </Link>
      </nav>
    </div>
  )
}

export default Navbar;