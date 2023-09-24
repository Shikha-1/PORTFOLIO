import React, { useState, useEffect, useRef } from "react"
import { Route, Routes } from "react-router-dom"
import "./css/App.css"

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/404"

function App() {
  const [navToggle, setnavToggle] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setnavToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const navClick = () => {
    setnavToggle(!navToggle);
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={() => navClick()} ref={ref}>
        <React.Fragment>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </React.Fragment>
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
