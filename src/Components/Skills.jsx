import React from 'react'
import html from '../Assets/HTML5.png'
import css from '../Assets/CSS3.png'
import bootstrap from '../Assets/Bootstrap.png'
import react from '../Assets/react.png'
import java from '../Assets/Java.png'
import springboot from '../Assets/Spring.png'
import javascript from '../Assets/JavaScript.png'
import mysql from '../Assets/MySQL.png'
import git from '../Assets/Git.png'
import AWS from '../Assets/AWS.png'
import "./Skills.css";
const Skills = () => {
  return (
    <div className='Skills_page' id='Skills'>
      <h2>SKILLS</h2>

      <div className='skills' >
        <div><img className='slogo' src={html} alt="html" /><div className='sname'>HTML5</div></div>
        <div><img className='slogo' src={css} alt="css" /><div className='sname'>CSS</div></div>
        <div><img className='slogo' src={bootstrap} alt="bootstrap" /><div className='sname'>BOOTSTRAP</div></div>
        <div><img className='slogo' src={react} alt="react" /><div className='sname'>REACT JS</div></div>
        <div><img className='slogo' src={java} alt="java" /><div className='sname'>JAVA</div></div>
        <div><img className='slogo' src={springboot} alt="springboot" /><div className='sname'>SPRINGBOOT</div></div>
        <div><img className='slogo' src={javascript} alt="javascript" /><div className='sname'>JAVASCRIPT</div></div>
        <div><img className='slogo' src={mysql} alt="mysql" /><div className='sname'>MYSQL</div></div>
        <div><img className='slogo' src={git} alt="git" /><div className='sname'>GIT</div></div>
        <div><img className='slogo' src={AWS} alt="AWS" /><div className='sname'>AWS</div></div>
      </div>
    </div>

  )
}

export default Skills
