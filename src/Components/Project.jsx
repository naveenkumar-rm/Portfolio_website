import React from "react";
import "./Project.css";
import { GitBranch } from "lucide-react";

const projects = [
  {
    name: "Poultry Management System",
    description:
      "A web-based system to efficiently manage poultry farm operations, reducing manual errors.",
    details: [
      "Implemented modules for vaccination tracking, inventory management, and record automation.",
      "Enabled real-time monitoring and reporting for better farm management decisions."
    ],
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl:
      "https://placehold.co/800x450/334155/FFFFFF/png?text=Poultry+Management+System"
  },
  {
    name: "Farm Portfolio Website",
    description:
      "A responsive portfolio website showcasing farm services, products, and operations.",
    details: [
      "Implemented React components for dynamic and interactive user experience.",
      "Designed a modern UI using Bootstrap and custom CSS for mobile-friendly layouts."
    ],
    tools: ["React", "HTML", "Bootstrap", "CSS"],
    imageUrl:
      "https://placehold.co/800x450/4f46e5/FFFFFF/png?text=Farm+Portfolio+Website"
  }
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>A collection of my work demonstrating Java Full Stack skills.</p>
        </div>


        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.imageUrl}
                alt={project.name}
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/800x450/8b5cf6/ffffff?text=Project+Image")
                }
              />

              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <div className="tools">
                  <GitBranch size={18} />
                  {project.tools.map((tool, i) => (
                    <span key={i}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
