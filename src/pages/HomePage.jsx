import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    const chars = '0123456789!@#$%^&*-}{<   >:  '
    const colors = [
      '#999999',
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
      }, 80) // Reduced frequency for better performance

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

export default function HomePage({ teamName = 'Tech Operations', description = 'We make what you see', topN = 3 }) {
  const navigate = useNavigate()

  // choosing only the top 3 projects from projects
  const topProjects = projects.slice(0, topN)

  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [overlayOpacity, setOverlayOpacity] = useState(0.8)
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
    <main className="min-h-screen w-full">
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
      <section className="min-h-screen w-full flex items-center justify-center px-8 relative" style={{ zIndex: 10 }}>
        <div className="text-center space-y-8">
          <GlitchText
            text="ACM PRESENTS"
            className="text-5xl animate-fade-in md:text-6xl lg:text-2xl font-bold leading-tight arcade-font-white"
          />

          <GlitchText
            text="Tech Operations"
            className="text-5xl animate-fade-in md:text-6xl lg:text-7xl font-bold leading-tight arcade-font-white"
          />
          <p className="text-lg h-20 md:text-xl lg:text-2xl max-w-4xl mx-auto animate-fade-in-delayed leading-relaxed arcade-font-white">
            {/* ACM PRESENTS */}
          </p>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto space-y-12 py-12 px-8 sm:px-12 lg:px-16 xl:px-20 relative" style={{ zIndex: 10 }}>

        <section
          ref={addToRefs}
          className={`space-y-8 transition-all duration-700 ${visibleSections.has(0)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center">
            <h2 className="text-4xl text-white font-semibold inline-block">Our Projects</h2>
          </div>
          <div className="grid grid-cols-3 gap-12">
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
        </section>

        <section
          ref={addToRefs}
          className={`space-y-8 transition-all duration-700 ${visibleSections.has(1)
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
          className={`space-y-12 py-8 transition-all duration-700 ${visibleSections.has(2)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-semibold text-white text-center">Head</h2>

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
                profileLink={`/member/${coHead.id}`}
              />
            ))}
          </div>

          <div className="text-center pt-8">
            <h3 className="text-3xl font-semibold text-slate-300">Star Performers</h3>
          </div>

          {members.filter(m => m.starPerformer === true).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
  )
}
