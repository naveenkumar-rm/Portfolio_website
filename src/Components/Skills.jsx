import React from "react";
import "./Skills.css";

import html from "../Assets/HTML5.png";
import css from "../Assets/CSS3.png";
import bootstrap from "../Assets/Bootstrap.png";
import react from "../Assets/react.png";
import javascript from "../Assets/JavaScript.png";
import java from "../Assets/Java.png";
import springboot from "../Assets/Spring.png";
import mysql from "../Assets/MySQL.png";
import git from "../Assets/Git.png";
import AWS from "../Assets/AWS.png";
import Postman from "../Assets/Postman.png";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">MY SKILLS</h2>
      <p className="skills-subtitle">Technologies I a work with</p>

      <div className="skills-container">
        {/* Frontend */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            <SkillCard icon={html} name="HTML5" />
            <SkillCard icon={css} name="CSS3" />
            <SkillCard icon={bootstrap} name="Bootstrap" />
            <SkillCard icon={react} name="ReactJS" />
            <SkillCard icon={javascript} name="JavaScript" />
          </div>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-grid">
            <SkillCard icon={java} name="Java" />
            <SkillCard icon={springboot} name="Spring Boot" />
            <SkillCard icon={mysql} name="MySQL" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3>Tools</h3>
          <div className="skills-grid">
            <SkillCard icon={git} name="Git" />
            <SkillCard icon={AWS} name="AWS" />
            <SkillCard icon={Postman} name="Postman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
