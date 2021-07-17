import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import logo from '../routes/images/logo2.png'

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ height: '100%' }}>
      <div className="empty_area"></div>
      <header className="header">
        <h1>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>

        <div className="dropdown max-screen">
          <ul className="nav">
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/work">WORK</Link>
            </li>
            <li>
              <Link to="/resume">RESUME</Link>
            </li>
            <li>
              <Link to="/contact" className="last_a">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          MENU
        </button>
        {isOpen && (
          <div className="dropdown">
            <ul className="nav">
              <li onClick={() => setIsOpen(false)}>
                <Link to="/about">ABOUT</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/work">WORK</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/resume">RESUME</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to="/contact" className="last_a">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div>{children}</div>
    </div>
  )
}

export default Header
