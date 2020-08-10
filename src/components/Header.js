import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

function Header() {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt='logo'/>
      </h1>
      <ul className="nav">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/">WORK</Link></li>
        <li><Link to="/">RESUME</Link></li>
        <li><Link to="/" className="last_a">CONTACT</Link></li>
      </ul>
    </header>
  );
}

export default Header;
