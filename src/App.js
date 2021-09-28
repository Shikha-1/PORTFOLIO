import React, {useState} from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./css/App.css"

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {
  const [navToggle, setnavToggle] = useState(false);

  const navClick = () => {
    setnavToggle(!navToggle);
 }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <Navbar />
      </div>
        <div className="nav-btn" onClick={() => navClick()}>
        {!navToggle ? (
          <React.Fragment>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
          </React.Fragment>
          ) : (
            <i className="nav-btn fas fa-times" style={{fontSize:"3rem"}}></i>
          )}
        </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
