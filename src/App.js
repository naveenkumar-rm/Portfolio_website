import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import HeroSection from './Components/HeroSection.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Experience from './Components/ExperienceSection.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
