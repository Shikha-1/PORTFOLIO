import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="profile">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_au3dnwez.json"
          background="transparent"
          speed="0.8"
          style={{
            width: "relative",
            height: "200px"
          }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <NavLink to="/">
            <li className="nav-item">
              Who am I?
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="nav-item">
              More About Me
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li className="nav-item">
              My Projects
            </li>
          </NavLink>
          <NavLink to="/contacts">
            <li className="nav-item">
              My Contacts
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
