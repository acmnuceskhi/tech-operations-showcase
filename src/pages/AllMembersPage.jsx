import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Member from '../components/Member'
import members from '../data/members'

export default function AllMembersPage() {
  const navigate = useNavigate();
  const head = members.find(m => m.title === "Head")
  const coHeads = members.filter(m => m.title === "Co-Head")
  const regularMembers = members.filter(m => m.title === "Member")

  return (
    <>
      <Sidebar />
      <main
        className="min-h-screen w-full py-16 sm:py-20 px-4 sm:px-8 text-white"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

          <header className="mt-10 sm:mt-16 mb-10 sm:mb-14 pb-12 sm:pb-20 relative z-10 mx-auto w-fit">
            <h1 className="text-4xl sm:text-7xl text-white mb-6 sm:mb-10 text-center arcade-font-white">
              Our Team
            </h1>
            <p className="text-sm sm:text-xl text-white arcade-font-white text-center">
              Meet the amazing people behind Tech Operations
            </p>
          </header>

          <section className="space-y-10 sm:space-y-12">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white text-center arcade-font-white">Head</h2>
            <div className="flex justify-center">
              <Member
                name={head.name}
                image={head.image}
                linkedin={head.linkedin}
                github={head.github}
                profileLink={`/member/${head.id}`}
              />
            </div>
          </section>

          <section className="space-y-10 sm:space-y-12">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-300 text-center arcade-font-white">Co-Heads</h2>
            <div className="flex justify-center gap-6 sm:gap-16 flex-wrap">
              {coHeads.map((coHead) => (
                <Member
                  key={coHead.id}
                  name={coHead.name}
                  image={coHead.image}
                  linkedin={coHead.linkedin}
                  github={coHead.github}
                  profileLink={`/member/${coHead.id}`}
                />
              ))}
            </div>
          </section>

          <section className="space-y-10 sm:space-y-12">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-300 text-center arcade-font-white">Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {regularMembers.map((member) => (
                <Member
                  key={member.id}
                  name={member.name}
                  image={member.image}
                  linkedin={member.linkedin}
                  github={member.github}
                  profileLink={`/member/${member.id}`}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
