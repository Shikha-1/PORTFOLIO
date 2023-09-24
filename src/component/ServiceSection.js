import React from 'react'
import "../css/Services.css"

function ServiceSection({ text, title, role, timeSpan }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <h5 className="s-title">{title}</h5>
          <div className='company'>
            <div className='service-section'>
              {role}
            </div>
            <div className='service-section'>{timeSpan}</div>
          </div>
          <p className="s-text">Responsibilities:</p>
          <ul className="s-description">{text.split("*")?.map(task => <li key={task}>{task}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection
