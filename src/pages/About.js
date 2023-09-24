import React from 'react'
import "../css/About.css"
import Title from "../component/Title"
import SkillSection from "../component/SkillSection"
import ServiceSection from "../component/ServiceSection"
import EducationSection from "../component/EducationSection"
function About() {
  return (
    <>
      <Title title={"Work Experience"} />
      <div className="servives-container">
        <ServiceSection
          role="Software Devewlopment Engineer"
          timeSpan="Feb 2022 - Present"
          title="ZopSmart"
          text="Built and maintained a high volume (500+) of responsive
                and interactive websites using React, Context-API, and
                SCSS. * Consumed and rendered listing type data specific for a
                company profile served from a five-point REST service.
                * Implemented Google Analytics and Google tag manager
                into applications for event tracking. * Built custom React components for the user-facing features
                using styled components. * Implemented stateful and
                stateless components app design patterns into the design
                of the new web portal.
                * Involved with bug fixing on functionality, performance, and
                designing issues. Also, Worked closely with team members
                to review code for best practices and standards. * Worked with design and UX teams to improve usability and
                design of products and also collaborated with project &
                product managers in setting goals & scoping projects."
        />
        <ServiceSection
          role="Junior Web Developer"
          timeSpan="Sep 2021 - Feb 2022"
          title="GNX Group"
          text="Worked as a front end developer and was involved in the
                analysis of requirements, design, development, integration, deployment, and testing. * Utilised HTML, css. and material-ui within react framework
                to create a responsive user interface. * Build storyboards to conceptualise designs and convey
                project plans to clients and management."
        />
      </div>
      <div className="img-section">
        <Title title={"Educational Qualifications"} />
        <EducationSection course={"B.Tech. in Computer Science & Engineering (2018 - 2022)"} marksObtained={"8.8"} marksParam={"CGPA"} location={"New Delhi"} institute={"Guru Govind Singh Indraprastha University"} />
        <EducationSection course={"Senior Secondary"} marksObtained={80} marksParam={"% Obtained"} location={"Saran, Bihar"} institute={"J D Public School"} />
        <EducationSection course={"Secondary"} marksObtained={95} marksParam={"% Obtained"} location={"Saran, Bihar"} institute={"Galaxy Residential Public School"} />
      </div>
      <Title title={"My Skills"} />
      <div className="skillsContainer">
        <SkillSection skill={"HTML"} progress={"95%"} width={"95%"} />
        <SkillSection skill={"CSS"} progress={"90%"} width={"90%"} />
        <SkillSection skill={"BOOTSRAP"} progress={"95%"} width={"95%"} />
        <SkillSection skill={"React Js"} progress={"90%"} width={"90%"} />
        <SkillSection skill={"Javascript"} progress={"80%"} width={"80%"} />
        <SkillSection skill={"Node Js"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"Express Js"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"MongoDB"} progress={"70%"} width={"70%"} />
      </div>
    </>
  );
}

export default About
