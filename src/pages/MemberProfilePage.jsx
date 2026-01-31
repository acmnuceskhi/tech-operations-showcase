import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Sidebar from '../components/Sidebar'
import { useMembers, useProjects } from '../hooks/useTinaData'

export default function MemberProfilePage({ memberId }) {
  const navigate = useNavigate()

  const { members, loading: membersLoading, error: membersError } = useMembers();
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();

  const loading = membersLoading || projectsLoading;
  const error = membersError || projectsError;

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

  const member = members.find(m => m.id === parseInt(memberId))

  if (!member) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Member Not Found</h1>
          <button
            onClick={() => navigate('/members')}
            className="text-slate-300 hover:text-white"
          >
            Go back to members
          </button>
        </div>
      </main>
    )
  }

  // Filter projects where this member is a contributor
  const memberProjects = projects.filter(project => 
    project.contributors && project.contributors.includes(member.id)
  )

  return (
    <>
      <Sidebar />
      <main
        className="min-h-screen w-full py-16 sm:py-20 px-4 sm:px-8 text-white"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}
      >
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">

              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-linear-to-br from-gray-400 via-white to-gray-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 arcade-font-white">{member.name}</h1>
                  {member.nickname && (
                    <p className="text-sm sm:text-base text-slate-400 mb-2 italic">{member.nickname}</p>
                  )}
                  <p className="text-base sm:text-xl text-slate-300 font-semibold">{member.title}</p>
                </div>

                {member.description && (
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{member.description}</p>
                )}

                <div className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="text-slate-300 hover:text-white text-xl sm:text-2xl" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <FaGithub className="text-slate-300 hover:text-white text-xl sm:text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6 sm:space-y-8">
            {memberProjects.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl relative font-semibold text-white">Contributed to</h2>
                <span className="text-slate-400 text-sm sm:text-lg">{memberProjects.length} {memberProjects.length === 1 ? 'project' : 'projects'}</span>
              </div>
            )}

            {memberProjects.length === 0 ? (
              <div className="text-center py-10 sm:py-16 bg-black/10 rounded-xl border border-white/10">
                <p className="text-slate-400 text-base sm:text-lg">No projects yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {memberProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-black/30 hover:border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col"
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col relative">
                      {/* Accent gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex-1 flex flex-col">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                          {project.desc}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-2 mt-auto">
                          <a
                            href={project.link}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-all duration-300"
                          >
                            View Details
                            <FaExternalLinkAlt className="text-xs" />
                          </a>

                          <div className="flex gap-2">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-300"
                              >
                                <FaExternalLinkAlt className="text-xs" />
                                Live
                              </a>
                            )}

                            {project.githubUrl ? (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-300"
                              >
                                <FaGithub className="text-sm" />
                                Code
                              </a>
                            ) : (
                              <div className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 text-slate-500 text-xs font-semibold rounded-lg cursor-not-allowed">
                                <FaGithub className="text-sm" />
                                Private
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}
