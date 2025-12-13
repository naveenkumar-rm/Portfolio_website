import React from 'react';
import html from '../Assets/HTML5.png';
import css from '../Assets/CSS3.png';
import bootstrap from '../Assets/Bootstrap.png';
import react from '../Assets/react.png';
import java from '../Assets/Java.png';
import springboot from '../Assets/Spring.png';
import javascript from '../Assets/JavaScript.png';
import mysql from '../Assets/MySQL.png';
import git from '../Assets/Git.png';
import AWS from '../Assets/AWS.png';
import Postman from '../Assets/Postman.png';
import "./Skills.css";

const Skills = () => {
  return (
    <div className='Skills_page' id='skills'>
      <h2>SKILLS</h2>
      <div className='skills_box'>

        {/* Frontend Skills */}
        <div className='skill_category'>
          <h6 className='box_title'>Frontend</h6>
          <div className='Skills_Icons'>
            <div><img className='slogo' src={html} alt="HTML5" /><div className='sname'>HTML5</div></div>
            <div><img className='slogo' src={css} alt="CSS3" /><div className='sname'>CSS3</div></div>
            <div><img className='slogo' src={bootstrap} alt="Bootstrap" /><div className='sname'>BOOTSTRAP</div></div>
            <div><img className='slogo' src={react} alt="React JS" /><div className='sname'>REACT JS</div></div>
            <div><img className='slogo' src={javascript} alt="JavaScript" /><div className='sname'>JAVASCRIPT</div></div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className='skill_category'>
          <h3 className='box_title'>Backend</h3>
          <div className='Skills_Icons'>
            <div><img className='slogo' src={java} alt="Java" /><div className='sname'>JAVA</div></div>
            <div><img className='slogo' src={springboot} alt="Spring Boot" /><div className='sname'>SPRINGBOOT</div></div>
            <div><img className='slogo' src={mysql} alt="MySQL" /><div className='sname'>MYSQL</div></div>
          </div>
        </div>

        {/* Tools */}
        <div className='skill_category'>
          <h3 className='box_title'>Tools</h3>
          <div className='Skills_Icons'>
            <div><img className='slogo' src={git} alt="Git" /><div className='sname'>GIT</div></div>
            <div><img className='slogo' src={AWS} alt="AWS" /><div className='sname'>AWS</div></div>
            <div><img className='slogo' src={Postman} alt="Postman" /><div className='sname'>POSTMAN</div></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
                