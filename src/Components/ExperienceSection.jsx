import React from "react";
import "./ExperienceSection.css";

const experience = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Glacier Technology · Coimbatore",
    period: "Jul 2025 – Dec 2025",
    duties: [
      "Developed web applications using React, Java, Spring Boot, HTML, CSS, and JavaScript.",
      "Designed and consumed RESTful APIs with seamless frontend integration.",
      "Worked with MySQL databases ensuring optimized queries and data security.",
      "Collaborated using Git for version control, code reviews, and sprint tasks.",
      "Improved performance through debugging, testing, and optimization.",
    ],
  },
  {
    role: "Process Executive – Data",
    company: "Cognizant Technology Solutions",
    period: "Jun 2024 – Feb 2025",
    duties: [
      "Managed end-to-end claims verification and processing workflows.",
      "Maintained high accuracy and compliance with quality benchmarks.",
      "Generated reports and supported operational performance tracking.",
    ],
  },
  
];

const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtitle">My professional journey</p>

      <div className="timeline">
        {experience.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>

              <ul>
                {item.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
