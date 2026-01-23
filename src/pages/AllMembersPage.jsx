import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Member from '../components/Member'
import LoadingSpinner from '../components/LoadingSpinner'
import { useMembers } from '../hooks/useTinaData'

export default function AllMembersPage() {
  const navigate = useNavigate();
  const { members, loading } = useMembers()

  // Show loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner message="Loading members..." />
  }

  const head = members.find(m => m.title === "Head")
  const coHeads = members.filter(m => m.title === "Co-Head")
  const regularMembers = members.filter(m => m.title !== "Head" && m.title !== "Co-Head");

  return (
    <>
      <Sidebar />
      <main
        className="min-h-screen w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-12 text-white"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}
      >
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">

          {/* Header */}
          <header className="mt-8 sm:mt-12 mb-8 sm:mb-12 relative z-10 mx-auto text-center max-w-4xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 arcade-font-white">
              Our Team
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed px-4">
              The creative minds building ACM's most innovative tech projects
            </p>
          </header>

          {/* Leadership Section */}
          <section className="space-y-12 sm:space-y-14 relative z-10">
            <div className="text-center space-y-3 relative z-20">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white arcade-font-white">Lead</h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto relative z-20">
                Guiding the vision and leading the charge
              </p>
            </div>

            {/* Head */}
            <div className="flex justify-center relative z-0">
              {head && (
                <Member
                  name={head.name}
                  nickname={head.nickname}
                  title={head.title}
                  image={head.image}
                  linkedin={head.linkedin}
                  github={head.github}
                  profileLink={`/member/${head.id}`}
                  starPerformer={head.starPerformer}
                />
              )}
            </div>

            {/* Co-Heads */}
            <div className="flex justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap pt-4">
              {coHeads.map((coHead) => (
                <Member
                  key={coHead.id}
                  name={coHead.name}
                  nickname={coHead.nickname}
                  title={coHead.title}
                  image={coHead.image}
                  linkedin={coHead.linkedin}
                  github={coHead.github}
                  profileLink={`/member/${coHead.id}`}
                  starPerformer={coHead.starPerformer}
                />
              ))}
            </div>
          </section>

          {/* Team Members Section */}
          <section className="space-y-12 sm:space-y-14 pt-6 relative z-10">
            <div className="text-center space-y-3 relative z-20">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white arcade-font-white">Members</h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto relative z-20">
                The talented individuals bringing ideas to life
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto relative z-0">
              {regularMembers.map((member) => (
                <Member
                  key={member.id}
                  name={member.name}
                  nickname={member.nickname}
                  title={member.title}
                  image={member.image}
                  linkedin={member.linkedin}
                  github={member.github}
                  profileLink={`/member/${member.id}`}
                  starPerformer={member.starPerformer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
