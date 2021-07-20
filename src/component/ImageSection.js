import React from 'react'
import "../css/About.css"

function ImageSection() {
    return (
      <div className="img-section">
        <p>
          I describe myself as someone who's persistant, a quick learner and
          loves problem solving by using simple and scalable solutions.
        </p>
        <div className="section">
          <div className="left-section">
            <h5 className="s-title">Personal Details</h5>
            <p>
              Full Name: <span>Shikha</span>
            </p>
            <p>
              D/o: <span>Mr. Shashi Kant Sharma</span>
            </p>
            <p>
              Age: <span>20</span>
            </p>
            <p>
              Nationality: <span>Indian</span>
            </p>
            <p>
              Languages Known: <span>English, Hindi</span>
            </p>
          </div>
          <div className="right-section">
            <h5 className="s-title">Educational Qualification</h5>
            <p>B.Tech. in Computer Science & Engineering (2018 - 2022)</p>
            <p>
              <span>Bhagwan Mahaveer College of Engineering & Management</span>
            </p>
            <p>
              CGPA (till 5th Sem.) <span> 9.6</span>
            </p>
          </div>
        </div>
        <a
          href={`${process.env.REACT_APP_RESUME}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">Download CV</button>
        </a>
      </div>
    );
}

export default ImageSection
