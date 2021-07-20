import React from 'react'
import "../css/Home.css"

function Home() {
    return (
      <div className="HomePage">
        <header className="hero">
          <h1 className="hero-text">
            Hi, I am
            <span> Shikha</span>
          </h1>
          <p className="h-sub-text">
            An undergraduate student pursing B. Tech. in CSE from Bhagwan
            Mahaveer College Of Engineering And Management, affliated to GGSIPU
            (Delhi). I am constantly learning something new in the feild of
            technology and looking to enhance and explore my learning, knowledge
            and skills in an esteemed organization while contributing to the
            growth of organisation.
          </p>
          <div className="icons">
            <a
              className="icon icon-holder"
              href={`${process.env.REACT_APP_GITHUB}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="icon icon-holder"
              href={`${process.env.REACT_APP_LINKEDIN}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="icon icon-holder"
              href={`${process.env.REACT_APP_RESUME}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-cloud-download-alt"></i>
            </a>
          </div>
        </header>
      </div>
    );
}

export default Home
