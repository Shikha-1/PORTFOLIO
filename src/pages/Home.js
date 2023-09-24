import React from 'react'
import "../css/Home.css"
import { PersonalDetails } from '../constant';

function Home() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          I am
          <span> Shikha</span>
        </h1>
        <p className="h-sub-text">
          A skilled web developer with a proven track record in collaborating effectively with design and back-end teams to implement visually appealing and responsive user interfaces. Proficient in writing clean, well-structured HTML and CSS code, ensuring cross-browser compatibility and adherence to accessibility standards. Experienced in developing interactive web applications using ReactJS, prioritizing performance and code quality, as well as implementing state management with Redux. Adept at optimizing applications for speed and scalability and troubleshooting front-end issues and bugs. Staying up-to-date with the latest web development trends, actively contributing to code reviews and process improvements. Dedication to delivering high-quality products and a valuable addition to any cross-functional team, ready to meet project deadlines and exceed expectations.
        </p>
        <div className="icons">
          <a
            className="icon icon-holder"
            href={PersonalDetails.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="icon icon-holder"
            href={PersonalDetails.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="icon icon-holder"
            href={`/Shikha's Resume.pdf`}
            target="_blank"
            download="Shikha's Resume.pdf"
            rel="noopener noreferrer"
          >
            <i className="fas fa-cloud-download-alt"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home
