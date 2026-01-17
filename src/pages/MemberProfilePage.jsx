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
      <main className="min-h-screen w-full py-20 px-8">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

              <div className="relative">
                {/* Gradient border wrapper */}
                <div className="relative w-48 h-48 rounded-full bg-linear-to-br from-gray-400 via-white to-gray-500 p-1">
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
                  <h1 className="text-4xl font-bold text-white mb-2">{member.name}</h1>
                  <p className="text-xl text-slate-300 font-semibold">{member.title}</p>
                </div>

                {member.description && (
                  <p className="text-slate-400 text-lg leading-relaxed">{member.description}</p>
                )}

                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="text-slate-300 hover:text-white text-2xl" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <FaGithub className="text-slate-300 hover:text-white text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-white">Projects</h2>
              <span className="text-slate-400 text-lg">{projects.length} total</span>
            </div>

            {projects.length === 0 ? (
              <div className="text-center py-16 bg-black/10 rounded-xl border border-white/10">
                <p className="text-slate-400 text-lg">No projects yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((projectName, index) => (
                  <div
                    key={index}
                    className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white">{projectName}</h3>
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
