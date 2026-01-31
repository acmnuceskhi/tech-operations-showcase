import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import { useProjects, useMembers } from '../hooks/useTinaData';

export default function ProjectPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const { members, loading: membersLoading, error: membersError } = useMembers();

  const loading = projectsLoading || membersLoading;
  const error = projectsError || membersError;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);

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

  const project = projects.find(p => p.id === parseInt(projectId, 10));

  if (!project) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[clamp(2rem,6vw,3rem)] font-bold text-white mb-4 px-2">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="text-slate-300 hover:text-white"
          >
            Go back to projects
          </button>
        </div>
      </main>
    );
  }

  const contributors = project.contributors ? project.contributors.map(id => members.find(m => m.id === id)).filter(Boolean) : [];

  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Sidebar />
      <div className="min-h-screen w-full text-center overflow-x-hidden py-16 sm:py-20 px-4 sm:px-8 text-white"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}>

        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

          {/* Project Header */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6 sm:mb-8">
              <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-bold text-white tracking-wider arcade-font-white px-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>View Live</span>
                  </a>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 font-semibold rounded-lg cursor-not-allowed">
                    <FaGithub className="text-xl" />
                    <span>Code Private</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-4xl mx-auto">
              {project.fullDescription || project.desc}
            </p>
          </div>

          {/* Image Gallery */}
          {images.length > 0 && (
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-white mb-6 sm:mb-8 arcade-font-white px-1">Project Gallery</h2>
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                {images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
                  >
                    <FaChevronLeft className="text-xl sm:text-2xl" />
                  </button>
                )}

                <div className="flex-1 max-w-4xl overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`
                    }}
                  >
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} - Image ${i + 1}`}
                        className="w-full h-64 sm:h-96 object-cover rounded-xl shrink-0"
                      />
                    ))}
                  </div>
                </div>

                {images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
                  >
                    <FaChevronRight className="text-xl sm:text-2xl" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Contributors */}
          {contributors.length > 0 && (
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-12">
              <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-white mb-6 sm:mb-8 arcade-font-white px-1">Contributors</h2>
              <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
                {contributors.map((member) => (
                  <div
                    key={member.id}
                    className="relative inline-flex flex-col items-center text-center cursor-pointer group w-40 sm:w-auto"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                    onClick={() => navigate(member.profileLink)}
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-linear-to-br from-gray-400 via-white to-gray-500 p-[3px] mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-8 sm:w-32 sm:h-10 bg-black/80 flex items-center justify-center gap-2.5 rounded-full transition-opacity duration-300"
                      style={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                    >
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 text-white bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center no-underline text-base transition-all duration-300 hover:scale-110"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 text-white bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center no-underline text-base transition-all duration-300 hover:scale-110"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                    <p className="mt-3 text-sm sm:text-base text-white font-semibold">{member.name}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

