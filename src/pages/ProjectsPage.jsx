import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
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
  const navigate = useNavigate();

  return (
    <div className="page">
      {/* Navigation buttons */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 20, display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
        >
          <FaHome /> Home
        </button>
      </div>

      <header className="header">
        <h1 className="main-heading glow">Tech-Ops Projects</h1>
        <p className="sub-heading">Showcasing the innovative work our team has created!</p>
      </header>

      <div className="grid ">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
