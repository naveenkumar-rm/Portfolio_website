import React from 'react';
import SectionTitle from './SectionTitle';
import './ExperienceSection.css';

const experience = [
  {
    title: "Java Full Stack Developer Intern",
    company: "Glacier Technology, Coimbatore",
    duration: "July 2025 - Dec 2025",
    color: "accent-blue",
    duties: [
      "Contributed to the development of web applications using React, Java, Spring Boot, HTML, CSS, and JavaScript.",
      "Designed and implemented RESTful APIs and integrated them with responsive front-end interfaces.",
      "Assisted in database design and management using MySQL, ensuring data consistency and security.",
      "Collaborated with senior developers using Git for version control, code reviews, and team coordination.",
      "Debugged, tested, and optimized application performance to improve reliability and user experience."
    ],
  },
  {
    title: "Process Executive Data",
    company: "Cognizant Technology Solutions",
    duration: "June 2024 – Feb 2025",
    color: "accent-indigo",
    duties: [
      "Proficient in handling end-to-end claims workflows, including verification and documentation.",
      "Demonstrates strong attention to detail, ensuring accuracy and compliance in claims processing.",
      "Experience in generating reports and maintaining quality and performance benchmarks."
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
          <ol className="job-duties">
            {job.duties.map((duty, dutyIndex) => (<li key={dutyIndex}>{duty}</li>))}
          </ol>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
