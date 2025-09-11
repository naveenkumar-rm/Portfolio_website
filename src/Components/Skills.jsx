import React from 'react'
import './Skills.css'
import html from "../Assets/New folder/HTML5.png"
import css from "../Assets/New folder/CSS3.png"
import java from "../Assets/New folder/Java.png"
import bootstrap from "../Assets/New folder/Bootstrap.png"
import javascript from "../Assets/New folder/JavaScript.png"
import springboot from "../Assets/New folder/Spring.png"
import react from "../Assets/New folder/react.png"
import mysql from "../Assets/New folder/MySQL.png"





const Skills = () => {
  return (
    <div id='Skills' className='page2'>
      <div>
        <h2 className='title2 name'>SKILLS</h2>
      </div><br />
      <div>
        <div className='skills' >
          <div><img className='slogo' src={html} alt="html" /><div className='sname1'>HTML5</div></div>
          <div><img className='slogo' src={css} alt="css" /><div className='sname2'>CSS</div></div>
          <div><img className='slogo' src={bootstrap} alt="bootstrap" /><div className='sname3'>BOOTSTRAP</div></div>
          <div><img className='slogo' src={react} alt="react" /><div className='sname4'>REACT JS</div></div>
          <div><img className='slogo' src={java} alt="java" /><div className='sname2'>JAVA</div></div>
          <div><img className='slogo' src={springboot} alt="springboot" /><div className='sname3'>SPRINGBOOT</div></div>
          <div><img className='slogo' src={javascript} alt="javascript" /><div className='sname3'>JAVASCRIPT</div></div>
          <div><img className='slogo' src={mysql} alt="mysql" /><div className='sname2'>MYSQL</div></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
