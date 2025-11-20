import React from "react";
import '../styles/projects.css';

const PROJECTS = [
  { title: "PROJECT 1", subtitle: "Description 1", img: "", link: "#" },
  { title: "PROJECT 2", subtitle: "Description 2", img: "", link: "#" },
  { title: "PROJECT 3", subtitle: "Description 3", img: "", link: "#" },
  { title: "PROJECT 4", subtitle: "Description 4", img: "", link: "#" },
  { title: "PROJECT 5", subtitle: "Description 5", img: "", link: "#" },
  { title: "PROJECT 6", subtitle: "Description 6", img: "", link: "#" },
];

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
