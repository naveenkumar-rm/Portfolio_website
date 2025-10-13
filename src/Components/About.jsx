import React from 'react'
import "./About.css";
import anime from '../Assets/Gemini_Generated_Image_bicrjfbicrjfbicr-Photoroom.png'
const About = () => {
  return (
    <div id='About' className='about'>
      <h1 className='Skills_heading'>About me</h1>
      <div className='about_content'>
        <div className='about_description'>
          <p>Hello there, I’m Naveen Kumar, and I'm a Software Developer. I adore designing user-friendly websites that are both simple and elegant yet scalable. I consider myself to be a lifelong learner.</p>
          <p>I began my professional journey at Cognizant, where I gained valuable experience collaborating within teams, tackling real-world challenges, and quickly adapting to new situations. It was during this time that I discovered my passion for technology, which motivated me to delve deeper into full-stack development with Java.</p>
          <p>When I’m not coding, I enjoy exploring new tech, experimenting with ideas, and learning new skills.</p>
        </div>
        <div className='anime'>
          <img src={anime} alt="anime" ></img>
        </div>
      </div>
    </div>
  )
}

export default About
