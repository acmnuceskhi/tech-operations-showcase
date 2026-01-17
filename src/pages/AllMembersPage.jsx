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
      <main className="min-h-screen w-full py-20 px-8">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-slate-300">Meet the amazing people behind Tech Operations</p>
          </div>

          <section className="space-y-12">
            <h2 className="text-4xl font-semibold text-white text-center">Head</h2>
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

          <section className="space-y-12">
            <h2 className="text-3xl font-semibold text-slate-300 text-center">Co-Heads</h2>
            <div className="flex justify-center gap-16 flex-wrap">
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

          <section className="space-y-12">
            <h2 className="text-3xl font-semibold text-slate-300 text-center">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
