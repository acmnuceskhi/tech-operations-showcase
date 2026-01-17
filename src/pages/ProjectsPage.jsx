import React from "react";
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen w-full text-center flex-col justify-center overflow-x-hidden text-white" style={{ fontFamily: '"Orbitron", sans-serif' }}>

        <div className="flex-col justify-center bg-yellow-500">

          <header className="mt-16 mb-14 pb-32 relative z-10">
            <h1 className="text-7xl text-white mb-10 mt-56"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                // textShadow: '0 0 8px rgba(255,255,255,0.67), 0 0 16px rgba(255,255,255,0.4)'
              }}>
              Team Projects
            </h1>
            <p className="text-xl text-white"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                // textShadow: '0 0 6px rgba(255,255,255,0.33), 0 0 12px rgba(255,255,255,0.2)'
              }}>
              We skilled like that.
            </p>
          </header>

          <div className="grid grid-cols-4 gap-10 bg-red-500/50 pb-20 px-[10%] z-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
