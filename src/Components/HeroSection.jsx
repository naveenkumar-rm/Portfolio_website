import React from 'react';
import ParticlesBackground from './ParticlesBackground.jsx';
import TypingEffect from './TypingEffect.jsx';
import './HeroSection.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const HeroSection = () => {
  let taglines = [
    "Java Full Stack Developer",
    "Spring Boot Specialist",
    "React.js Enthusiast",
    "RESTful API Builder",
  ]
  return (
    <header id="home" className="hero">
      <ParticlesBackground />
      <div className="hero-container">
        <h1 className="hero-title">Hi, I'm <span className="hero-name">Naveenkumar M</span></h1>
        <p className="hero-tagline"><TypingEffect textArray={taglines} /></p>
        <p className="hero-desc">I am a dedicated Java Full Stack Developer with hands-on experience in Java, Spring Boot, and Object-Oriented Programming (OOP). Skilled in front-end development using HTML, CSS, JavaScript, and React.js. Experienced building RESTful APIs and scalable web applications.</p>
        <div className="hero-cta">
          <a href="#Resume" className="btn-primary">Download Resume</a>
        </div>
      </div>
      <div className='Home_SM'>
                    <a target="_blank" href='https://www.linkedin.com/in/naveenkumar-rm/'><FaLinkedinIn className='SM_logo' /></a>
                    <a target="_blank" href='https://github.com/naveenkumar-rm'><FaGithub className='SM_logo' /></a>
      </div>
    </header>
  );
};

export default HeroSection;
