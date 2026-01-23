import React from "react";
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Sidebar />
      <div
        className="min-h-screen w-full text-center flex-col justify-center overflow-x-hidden text-white py-16 sm:py-20 px-4 sm:px-8"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="mt-10 sm:mt-16 mb-10 sm:mb-14 pb-12 sm:pb-20 relative z-10">
            <h1 className="text-4xl sm:text-7xl text-white mb-6 sm:mb-10 arcade-font-white">
              Team Projects
            </h1>
            <p className="text-sm sm:text-xl text-white arcade-font-white">
              We skilled like that.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10 pb-10 sm:pb-20">
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
