import React from "react";
import '../styles/projects.css';
import projects from '../data/projects';

const PROJECTS = projects.map(project => ({
  title: project.title,
  subtitle: project.desc,
  img: project.image,
  link: project.link
}));

function ProjectCard({ title, subtitle, img, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className="project-card">
        {img && (
          <div className="img-wrap">
            <img src={img} alt={title} className="project-image" />
          </div>
        )}
        <div className="project-text">
          <h2 className="project-title">{title}</h2>
          <p className="project-subtitle">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="main-heading glow">Tech-Ops Projects</h1>
        <p className="sub-heading">Showcasing the innovative work our team has created!</p>
      </header>

      <div className="grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
