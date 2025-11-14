import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import TechChip from '../components/TechChip'
import Member from '../components/Member'
import projects from '../data/projects'
import techStack from '../data/logos'
import members from '../data/members'

export default function HomePage({ teamName = 'Tech Operations', description = 'We make what you see', topN = 3 }) {
  // choosing only the top 3 projects from projects
  const topProjects = projects.slice(0, topN)
  
  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [overlayOpacity, setOverlayOpacity] = useState(0.5)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observers = []
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => new Set([...prev, index]))
              }
            })
          },
          { threshold: 0.1 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Scroll effect for overlay fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      const viewportHeight = window.innerHeight
      
      // Fade from 0.5 opacity (50% opaque) to 0 as user scrolls through first viewport
      const fadeProgress = Math.min(scrollPosition / viewportHeight, 1)
      const newOpacity = 0.5 * (1 - fadeProgress)
      
      setOverlayOpacity(newOpacity)
    }

    // Set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <main className="min-h-screen w-full">
      {/* Black Overlay - Fades on scroll */}
      <div 
        className="fixed inset-0 bg-black pointer-events-none"
        style={{ 
          opacity: overlayOpacity,
          zIndex: 5,
          transition: 'opacity 0.1s linear'
        }}
      />

      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen w-full flex items-center justify-center px-8 relative" style={{ zIndex: 10 }}>
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in leading-tight arcade-font-white">
            TECH OPERATIONS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto animate-fade-in-delayed leading-relaxed arcade-font-white">
            WE MAKE WHAT YOU SEE
          </p>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto space-y-12 py-12 px-8 sm:px-12 lg:px-16 xl:px-20 relative" style={{ zIndex: 10 }}>

        <section 
          ref={addToRefs}
          className={`space-y-8 transition-all duration-700 ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <h2 className="text-4xl text-white font-semibold inline-block">Our Projects</h2>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {topProjects.map((p) => (
              <ProjectCard key={p.id} title={p.title} desc={p.desc} image={p.image} link={p.link} tags={p.tags} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {}}
            >
              Show All Projects
            </button>
          </div>
        </section>

        <section 
          ref={addToRefs}
          className={`space-y-8 transition-all duration-700 ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl font-semibold text-white text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 max-w-6xl mx-auto">
            {techStack.map((t) => (
              <TechChip key={t.name} icon={t.icon} color={t.color}>{t.name}</TechChip>
            ))}
          </div>
        </section>

        <section 
          ref={addToRefs}
          className={`space-y-12 py-8 transition-all duration-700 ${
            visibleSections.has(2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-semibold text-white text-center">Head</h2>
          
          <div className="flex justify-center">
            <Member 
              name={members.find(m => m.title === "Head").name}
              image={members.find(m => m.title === "Head").image}
              linkedin={members.find(m => m.title === "Head").linkedin}
              github={members.find(m => m.title === "Head").github}
              profileLink={members.find(m => m.title === "Head").profileLink}
            />
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-semibold text-slate-300">Co-Heads</h3>
          </div>

          <div className="flex justify-center gap-16 flex-wrap">
            {members.filter(m => m.title === "Co-Head").map((coHead) => (
              <Member 
                key={coHead.id}
                name={coHead.name}
                image={coHead.image}
                linkedin={coHead.linkedin}
                github={coHead.github}
                profileLink={coHead.profileLink}
              />
            ))}
          </div>

          <div className="text-center pt-8">
            <h3 className="text-3xl font-semibold text-slate-300">Star Performers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {members.filter(m => m.title === "Member").map((performer) => (
              <Member 
                key={performer.id}
                name={performer.name}
                image={performer.image}
                linkedin={performer.linkedin}
                github={performer.github}
                profileLink={performer.profileLink}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {}}
            >
              View All Members
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
