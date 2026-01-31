import React from "react";
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useTinaData';

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <>
        <Sidebar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-xl arcade-font-white">Loading...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Sidebar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl text-white mb-4">Error Loading Data</h1>
            <p className="text-slate-300">{error.message}</p>
          </div>
        </div>
      </>
    );
  }

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
            <h1 className="text-[clamp(2.25rem,7vw,4.5rem)] text-white mb-6 sm:mb-10 arcade-font-white px-2">
              Team Projects
            </h1>
            <p className="text-xs sm:text-base text-white arcade-font-white px-1">
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
