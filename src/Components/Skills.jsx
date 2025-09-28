import React from 'react'
import './Skills.css'





const Skills = () => {
  return (
    <div id='Skills' className='page2'>
      <h1 className='title'>SKILLS</h1>
      <div className='skills' >
        <div className='Skills_box'>
          <h2>Software Developer</h2>
          <p>I enjoy writing clean code and creating useful products.</p>
          <h3>Languages & Databases</h3>
          <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>MySQL</li>
          </ul>
          <h2>Tools& Platforms</h2>
          <ul>
            <li>Eclipse</li>
            <li>IntelliJ</li>
              <li>AWS</li>
          </ul>
        </div>
        <div className='Skills_box'>
          <h2>Frontend Developer</h2>
          <p>It's fun for me to bring new concepts to life. I consider myself fortunate to be a Fullstack developer because my work has a direct impact on the user's life.</p>
          <h2>Skills</h2>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h2>Tools</h2>
          <ul>
            <li>VScode</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Skills
