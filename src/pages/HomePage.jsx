import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import InterstitialText from '../components/InterstitialText'
import Member from '../components/Member'
import { useProjects, useMembers } from '../hooks/useTinaData'

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

export default function HomePage({ teamName = 'Tech Operations', description = 'We make what you see' }) {
  const navigate = useNavigate()

  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const { members, loading: membersLoading, error: membersError } = useMembers();

  // State for scroll animations
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [overlayOpacity, setOverlayOpacity] = useState(0.8)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const sectionRefs = useRef([])

  const loading = projectsLoading || membersLoading;
  const error = projectsError || membersError;

  // Get featured projects (first 4)
  const featuredProjects = projects ? projects.slice(0, 4) : [];

  // Get star performers
  const starPerformers = members ? members.filter(m => m.starPerformer === true).slice(0, 6) : [];

  useEffect(() => {
    // Only set up observer after data has loaded
    if (loading) return;

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
  }, [loading])

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
              text="ACM's creative tech team. We build the cool stuff."
              className="text-xs sm:text-sm px-[6%] sm:px-[10%] mt-6 sm:mt-10 wrap-normal animate-fade-in font-bold leading-tight arcade-font-white"
            />

            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed text-slate-300 px-4">
              Scoreboards, minigames, and innovative projects that showcase what tech can really do.
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
        <div className="space-y-0 flex-col justify-center content-center items-center" style={{ zIndex: 10 }}>

          {/* Interstitial - Building Real Solutions */}
          <section
            ref={addToRefs}
            className={`transition-all duration-700 ${visibleSections.has(0)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <InterstitialText
              text="Beyond Basic Development"
              subtext="We create projects that turn heads and make tech exciting."
            />
          </section>

          {/* Featured Projects Section */}
          <section
            ref={addToRefs}
            className={`space-y-16 sm:space-y-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto py-12 transition-all duration-700 ${visibleSections.has(1)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={addToRefs}
                className={`transition-all duration-700 ${visibleSections.has(2 + index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
              >
                <FeaturedProjectCard project={project} index={index} members={members} />
              </div>
            ))}

            <div className="text-center pt-8">
              <button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => navigate('/projects')}
              >
                View All Projects
              </button>
            </div>
          </section>

          {/* Interstitial - Community Driven */}
          <section
            ref={addToRefs}
            className={`transition-all duration-700 ${visibleSections.has(6)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <InterstitialText
              text="Where Creativity Meets Code"
              subtext="Pushing boundaries, learning together, and having fun while we're at it."
            />
          </section>

          {/* Star Performers Section */}
          {starPerformers.length > 0 && (
            <section
              ref={addToRefs}
              className={`space-y-8 py-12 px-4 sm:px-8 transition-all duration-700 ${visibleSections.has(7)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center arcade-font-white">
                Star Performers
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {starPerformers.map((performer) => (
                  <Member
                    key={performer.id}
                    name={performer.name}
                    nickname={performer.nickname}
                    title={performer.title}
                    image={performer.image}
                    linkedin={performer.linkedin}
                    github={performer.github}
                    profileLink={`/member/${performer.id}`}
                    starPerformer={performer.starPerformer}
                  />
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => navigate('/members')}
                >
                  View All Members
                </button>
              </div>
            </section>
          )}

          {/* Join Us Section */}
          <section
            ref={addToRefs}
            className={`space-y-8 py-12 transition-all duration-700 ${visibleSections.has(8)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <div className="bg-black/30 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 sm:p-12 hover:border-white/30 hover:bg-black/40 transition-all duration-300 shadow-2xl">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 arcade-font-white">Join Us</h3>
                <p className="text-slate-300 text-base sm:text-lg mb-2 leading-relaxed">
                  Want to build projects that stand out? Be part of ACM's most creative tech team.
                </p>
                <p className="text-slate-400 text-sm sm:text-base mb-8">
                  Learn, create, and showcase your skills through innovative projects. No experience required—just passion.
                </p>
                <a
                  href="https://example.com/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  Join the Community
                </a>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section
            ref={addToRefs}
            className={`py-12 pb-20 transition-all duration-700 ${visibleSections.has(9)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 arcade-font-white">Get in Touch</h2>
                <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                  Got an idea? Want to collaborate? Let's build something amazing together.
                </p>

                <div className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                      <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:techops@example.com"
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        techops@example.com
                      </a>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                      <h3 className="text-white font-semibold text-lg mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
