import React from 'react'
import "../css/About.css"
import Title from "../component/Title"
import SkillSection from "../component/SkillSection"
import ServiceSection from "../component/ServiceSection"
import ImageSection from "../component/ImageSection"

function About() {
    return (
      <>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Title title={"My Skills"} span={"My Skills"} />
        <div className="skillsContainer">
          <SkillSection skill={"HTML"} progress={"85%"} width={"85%"} />
          <SkillSection skill={"CSS"} progress={"70%"} width={"70%"} />
          <SkillSection skill={"BOOTSRAP"} progress={"90%"} width={"90%"} />
          <SkillSection skill={"React Js"} progress={"70%"} width={"70%"} />
          <SkillSection skill={"Javascript"} progress={"80%"} width={"80%"} />
          <SkillSection skill={"Node Js"} progress={"80%"} width={"80%"} />
          <SkillSection skill={"Express Js"} progress={"70%"} width={"70%"} />
          <SkillSection skill={"MongoDB"} progress={"70%"} width={"70%"} />
          <SkillSection skill={"Python"} progress={"70%"} width={"70%"} />
        </div>
        <Title title={"What I Can Do"} span={"What I Can Do"} />
        <div className="servives-container">
          <ServiceSection
            title={"Frontend Development"}
            text={"Can develop web pages using HTML, CSS, Object oriented Javascript, ES6 & JSON. Good understanding of Document Object Model(DOM) and DOM functions."}
         />
          <ServiceSection
            title={"Full Stack Development"}
            text={"Good understanding of Back-end API development using NodeJs. Ability to design and develop innovative applications by utilizing a range of technologies, including React, NodeJs, ExpressJs & MongoDB."}
          />
        </div>
      </>
    );
}

export default About
