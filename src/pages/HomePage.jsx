import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'
import TechChip from '../components/TechChip'
import Member from '../components/Member'
import projects from '../data/projects'
import techStack from '../data/logos'
import members from '../data/members'

// Glitch Text Component
function GlitchText({ text, className = '' }) {
  const [isHovered, setIsHovered] = useState(false)
  const [glitchChars, setGlitchChars] = useState([])
  const [glitchColors, setGlitchColors] = useState([])
  const intervalRefs = useRef([])

  useEffect(() => {
    const chars = '!@#$%^&*-}{<   >:  '
    const colors = [
      '#FFFFFF',
    ]

    if (isHovered) {
      // Use single interval for all characters - more efficient
      const interval = setInterval(() => {
        setGlitchChars(prev => {
          const newChars = [...prev]
          text.split('').forEach((char, index) => {
            if (char !== ' ') {
              newChars[index] = chars[Math.floor(Math.random() * chars.length)]
            }
          })
          return newChars
        })
        setGlitchColors(prev => {
          const newColors = [...prev]
          text.split('').forEach((char, index) => {
            if (char !== ' ') {
              newColors[index] = colors[Math.floor(Math.random() * colors.length)]
            }
          })
          return newColors
        })
      }, 110) // Reduced frequency for better performance

      intervalRefs.current = [interval]
    } else {
      // Clear all intervals and reset to original text
      intervalRefs.current.forEach(interval => clearInterval(interval))
      intervalRefs.current = []
      setGlitchChars([])
      setGlitchColors([])
    }

    return () => {
      intervalRefs.current.forEach(interval => clearInterval(interval))
    }
  }, [isHovered, text])

  return (
    <h1
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split('').map((char, index) => {
        const displayChar = glitchChars[index] || (char === ' ' ? '\u00A0' : char)
        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              color: glitchColors[index] || 'inherit',
              whiteSpace: 'pre'
            }}
          >
            {displayChar}
          </span>
        )
      })}
    </h1>
  )
}

export default function HomePage({ teamName = 'Tech Operations', description = 'We make what you see', topN = 8 }) {
  const navigate = useNavigate()

  // choosing only the top 3 projects from projects
  const topProjects = projects.slice(0, topN)

  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [overlayOpacity, setOverlayOpacity] = useState(0.8)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const sectionRefs = useRef([])

  useEffect(() => {
    // Use single observer for all sections - more efficient
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target)
            if (index !== -1) {
              setVisibleSections((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all sections with single observer
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Scroll effect for overlay fade
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
          const viewportHeight = window.innerHeight

          // Fade from 0.5 opacity (50% opaque) to 0 as user scrolls through first viewport
          const fadeProgress = Math.min(scrollPosition / viewportHeight, 1)
          const newOpacity = 0.8 * (1 - fadeProgress)

          setOverlayOpacity(newOpacity)

          // Hide scroll indicator after scrolling 100px
          setShowScrollIndicator(scrollPosition < 100)

          ticking = false
        })
        ticking = true
      }
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
    <>
      <Sidebar />
      <main
        className="min-h-screen w-full"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(128,0,255,0.15), transparent 60%), radial-gradient(circle at 80% 40%, rgba(0,128,255,0.1), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255, 50, 149, 0.14), transparent 60%), #000"
        }}
      >
        {/* Black Overlay - Fades on scroll */}
        <div
          className="fixed inset-0 bg-black pointer-events-none"
          style={{
            opacity: overlayOpacity,
            // opacity: 0,
            zIndex: 5,
            transition: 'opacity 0.1s linear'
          }}
        />

        {/* Hero Section - Full Viewport */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 relative" style={{ zIndex: 10 }}>
          <div className="text-center space-y-8">

            <div className='h-10' />

            <div
              className="text-4xl sm:text-7xl animate-fade-in font-bold leading-tight arcade-font-white"
            >
              Tech Operations
            </div>

            <GlitchText
              text="Replacing recycled tech projects with pure magic."
              className="text-xs sm:text-sm px-[6%] sm:px-[10%] mt-6 sm:mt-10 wrap-normal animate-fade-in font-bold leading-tight arcade-font-white"
            />

            <p className="text-lg h-20 md:text-xl lg:text-2xl max-w-4xl mx-auto animate-fade-in-delayed leading-relaxed arcade-font-white">
              {/* ACM PRESENTS */}
            </p>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500"
            style={{
              opacity: showScrollIndicator ? 1 : 0,
              pointerEvents: showScrollIndicator ? 'auto' : 'none',
              zIndex: 20
            }}
            aria-label="Scroll down"
          >
            <div className="flex flex-col items-center gap-2 group">
              {/* <span className="text-white/70 text-sm arcade-font-white group-hover:text-white transition-colors">
              SCROLL
            </span> */}
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white/50 transition-all">
                <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce group-hover:bg-white"></div>
              </div>
              <svg
                className="w-6 h-6 text-white/70 group-hover:text-white transition-colors animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </section>

        {/* Scrollable Content */}
        <div className="space-y-12 flex-col justify-center content-center items-center px-4 sm:px-0" style={{ zIndex: 10 }}>

          <section
            ref={addToRefs}
            className={`space-y-8 transition-all flex-col content-center items-center justify-center duration-700 ${visibleSections.has(0)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >

            <div className='px-0 sm:px-[10%]'>

              <h2 className="text-left text-2xl sm:text-4xl py-3 w-max mb-5 text-white font-semibold arcade-font-white inline-block">Projects</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {topProjects.map((p) => (
                  <ProjectCard key={p.id} title={p.title} desc={p.desc} image={p.image} link={p.link} />
                ))}
              </div>
              <div className="text-center mt-8">
                <button
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => navigate('/projects')}
                >
                  Show All Projects
                </button>
              </div>
            </div>
          </section>

          <section
            ref={addToRefs}
            className={`space-y-8 transition-all duration-700 ${visibleSections.has(1)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white text-center arcade-font-white">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 max-w-6xl mx-auto">
              {techStack.map((t) => (
                <TechChip key={t.name} icon={t.icon} color={t.color}>{t.name}</TechChip>
              ))}
            </div>
          </section>

          <section
            ref={addToRefs}
            className={`space-y-12 py-8 transition-all duration-700 ${visibleSections.has(2)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center arcade-font-white">Head</h2>

            <div className="flex justify-center">
              {(() => {
                const head = members.find(m => m.title === "Head")
                return head ? (
                  <Member
                    name={head.name}
                    image={head.image}
                    linkedin={head.linkedin}
                    github={head.github}
                    profileLink={`/member/${head.id}`}
                  />
                ) : null
              })()}
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-300 arcade-font-white">Co-Heads</h3>
            </div>

            <div className="flex justify-center gap-6 sm:gap-16 flex-wrap">
              {members.filter(m => m.title === "Co-Head").map((coHead) => (
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

            <div className="text-center pt-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-300 arcade-font-white">Star Performers</h3>
            </div>

            {members.filter(m => m.starPerformer === true).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {members.filter(m => m.starPerformer === true).map((performer) => (
                  <Member
                    key={performer.id}
                    name={performer.name}
                    image={performer.image}
                    linkedin={performer.linkedin}
                    github={performer.github}
                    profileLink={`/member/${performer.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-black/10 rounded-xl border border-white/10 max-w-2xl mx-auto">
                <p className="text-slate-400 text-lg">No star performers yet. Stay tuned!</p>
              </div>
            )}

            <div className="text-center mt-8">
              <button
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => navigate('/members')}
              >
                View All Members
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
