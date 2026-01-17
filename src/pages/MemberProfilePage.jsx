import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaArrowLeft, FaHome } from 'react-icons/fa'
import ContributionCard from '../components/ContributionCard'
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
            onClick={() => navigate('/')}
            className="text-slate-300 hover:text-white"
          >
            Go back home
          </button>
        </div>
      </main>
    )
  }

  const contributions = member.contributions || []

  return (
    <main className="min-h-screen w-full py-20 px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/members')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <FaArrowLeft />
            <span>Back to Members</span>
          </button>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <FaHome />
            <span>Home</span>
          </button>
        </div>

        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            <div className="relative">
              {/* Gradient border wrapper */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-gray-400 via-white to-gray-500 p-[4px]">
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
            <h2 className="text-3xl font-semibold text-white">Contributions</h2>
            <span className="text-slate-400 text-lg">{contributions.length} total</span>
          </div>

          {contributions.length === 0 ? (
            <div className="text-center py-16 bg-black/10 rounded-xl border border-white/10">
              <p className="text-slate-400 text-lg">No contributions yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contributions.map((contribution) => (
                <ContributionCard 
                  key={contribution.id}
                  title={contribution.title}
                  description={contribution.description}
                  date={contribution.date}
                  type={contribution.type}
                  link={contribution.link}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
