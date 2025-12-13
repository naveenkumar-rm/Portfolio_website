import React from 'react';
import ParticlesBackground from './ParticlesBackground.jsx';
import TypingEffect from './TypingEffect.jsx';
import './HeroSection.css';

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
    </header>
  );
};

export default HeroSection;
