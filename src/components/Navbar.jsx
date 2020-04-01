import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';

class Navbar extends Component {
  state = { clicked: false }



  render() {
    // const resume = () => navigate('https://bit.ly/39ieym9');
    return (
      <div className="navbar" >
        <nav className="nav">
          <Link className="links" to='/about'>About </Link>{' '}
          <Link className="links" to='/resume' >Resume </Link>
          <Link className="links" to='/project'>Project </Link>
          <Link className="links" to='/contact'>Contact </Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;