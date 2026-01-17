import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Sidebar from '../components/Sidebar'
import members from '../data/members'

export default function MemberProfilePage({ memberId }) {
  const navigate = useNavigate()

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

  const projects = member.projects || []

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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white arcade-font-white">Projects</h2>
              <span className="text-slate-400 text-sm sm:text-lg">{projects.length} total</span>
            </div>

            {projects.length === 0 ? (
              <div className="text-center py-10 sm:py-16 bg-black/10 rounded-xl border border-white/10">
                <p className="text-slate-400 text-base sm:text-lg">No projects yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {projects.map((projectName, index) => (
                  <div
                    key={index}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover:border-white/30 transition-all duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{projectName}</h3>
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
