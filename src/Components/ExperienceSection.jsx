import React from 'react';
import SectionTitle from './SectionTitle';
import './ExperienceSection.css';

const experience = [
  {
    title: "Java Full Stack Developer",
    company: "Glacier Technology, Coimbatore",
    duration: "July 2025 – Nov 2025",
    color: "accent-blue",
    duties: [
      "Built web applications using React and Spring Boot.",
      "Designed and consumed RESTful APIs.",
    ],
  },
  {
    title: "Process Executive Data",
    company: "Cognizant Technology Solutions",
    duration: "June 2020 – May 2023",
    color: "accent-indigo",
    duties: [
      "Managed data workflows and reporting.",
      "Ensured data quality and compliance.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="experience">
    <SectionTitle id="experience">Professional Experience</SectionTitle>
    <div className="experience-list">
      {experience.map((job, index) => (
        <div key={index} className={`job-card ${job.color}`}>
          <div className="job-head">
            <h3 className="job-title">{job.title}</h3>
            <span className="job-badge">{job.duration}</span>
          </div>
          <p className="job-company">{job.company}</p>
          <ul className="job-duties">
            {job.duties.map((duty, dutyIndex) => (<li key={dutyIndex}>{duty}</li>))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
