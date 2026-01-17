import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import projects from '../data/projects';
import members from '../data/members';

export default function ProjectPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
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
      <div className="min-h-screen w-full text-center overflow-x-hidden py-20 px-8 text-white"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* Project Header */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-5xl font-bold text-white tracking-wider uppercase">
                {project.title}
              </h1>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                  <span>View Code</span>
                </a>
              )}
            </div>

            <p className="text-slate-300 text-lg max-w-4xl mx-auto">
              {project.fullDescription || project.desc}
            </p>
          </div>

          {/* Image Gallery */}
          {images.length > 0 && (
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Project Gallery</h2>
              <div className="flex items-center justify-center gap-8">
                {images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="bg-white text-red-900 border-none px-4 py-2.5 text-2xl rounded-full cursor-pointer hover:bg-slate-200 transition-colors shrink-0"
                  >
                    ◀
                  </button>
                )}

                <div className="flex-1 max-w-4xl overflow-hidden">
                  <div
                    className="flex gap-5 transition-transform duration-500"
                    style={{
                      transform: `translateX(-${(currentIndex % images.length) * (100 / images.length)}%)`
                    }}
                  >
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} - Image ${i + 1}`}
                        className="w-full h-96 object-cover rounded-xl shrink-0"
                      />
                    ))}
                  </div>
                </div>

                {images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="bg-white text-red-900 border-none px-4 py-2.5 text-2xl rounded-full cursor-pointer hover:bg-slate-200 transition-colors shrink-0"
                  >
                    ▶
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Contributors */}
          {contributors.length > 0 && (
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Contributors</h2>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {contributors.map((member) => (
                  <div
                    key={member.id}
                    className="relative inline-block cursor-pointer group"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                    onClick={() => navigate(member.profileLink)}
                  >
                    <div className="relative w-32 h-32 rounded-full bg-linear-to-br from-gray-400 via-white to-gray-500 p-[3px]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex items-center justify-center gap-2.5 rounded-full transition-opacity duration-300"
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
                    <p className="mt-3 text-base text-white font-semibold">{member.name}</p>
                    <p className="text-sm text-slate-400">{member.title}</p>
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

