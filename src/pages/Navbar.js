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
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" exact>
                ABOUT ME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" exact>
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact>
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar
