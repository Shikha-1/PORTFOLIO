import React from 'react'
import "../css/About.css"

function EducationSection({ course, institute, location, marksParam, marksObtained }) {
  return (
    <div className="sub-section">
      <span>{course}</span>
      <p>
        {institute}, {location}
      </p>
      <p>
        {marksParam}: {marksObtained}
      </p>
    </div>
  );
}

export default EducationSection
