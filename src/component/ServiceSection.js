import React from 'react'
import "../css/Services.css"

function ServiceSection({text, title}) {
    return (
      <div className="ServicesSection">
        <div className="service">
          <div className="service-content">
            <h5 className="s-title">{title}</h5>
            <p className="s-text">{text}</p>
          </div>
        </div>
      </div>
    );
}

export default ServiceSection
