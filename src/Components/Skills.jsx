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
import Tailwind from "../Assets/Tailwind-CSS.png";
import GitHub from "../Assets/GitHub.png";
import Eclipse from "../Assets/Eclipse-IDE.png";
import IntelliJ from "../Assets/IntelliJ-IDEA.png";

const SkillCard = ({ icon, name }) => (
  <div className="skill-card">
    <div className="skill-icon">
      <img src={icon} alt={name} />
    </div>
    <span>{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Tools</h2>
      <p className="skills-subtitle">Technologies I work with</p>

      <div className="skills-wrapper">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            <SkillCard icon={html} name="HTML5" />
            <SkillCard icon={css} name="CSS3" />
            <SkillCard icon={Tailwind} name="Tailwind CSS" />
            <SkillCard icon={bootstrap} name="Bootstrap" />
            <SkillCard icon={react} name="ReactJS" />
            <SkillCard icon={javascript} name="JavaScript" />
          </div>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-grid">
            <SkillCard icon={java} name="Java" />
            <SkillCard icon={springboot} name="Spring Boot" />
            <SkillCard icon={mysql} name="MySQL" />
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools & Platforms</h3>
          <div className="skills-grid">
            <SkillCard icon={git} name="Git" />
            <SkillCard icon={GitHub} name="GitHub" />
            <SkillCard icon={AWS} name="AWS" />
            <SkillCard icon={Postman} name="Postman" />
            <SkillCard icon={IntelliJ} name="IntelliJ IDEA" />
            <SkillCard icon={Eclipse} name="Eclipse IDE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
