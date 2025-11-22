import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Member({ name, image, linkedin, github, profileLink }) {
  const handleCardClick = () => {
    const url = profileLink || linkedin || github
    if (url && url !== '#') {
      // Check if it's an internal link
      if (url.startsWith('/')) {
        window.location.href = url
      } else {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        onClick={handleCardClick}
        className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-10 w-[360px] h-[360px] group-hover:bg-black/30 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/50 flex flex-col items-center justify-center hover:scale-105 cursor-pointer"
      >
        
        <div className="relative mb-8">
          {/* Gradient border wrapper */}
          <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-gray-400 via-white to-gray-500 p-[3px] group-hover:from-gray-300 group-hover:via-white group-hover:to-gray-400 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-6 group-hover:text-slate-200 transition-all duration-300">
          {name}
        </h3>
        
        <div className="flex justify-center gap-4">
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
              aria-label={`${name}'s LinkedIn`}
            >
              <FaLinkedin className="text-slate-300 hover:text-white text-xl" />
            </a>
          )}
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/50"
              aria-label={`${name}'s GitHub`}
            >
              <FaGithub className="text-slate-300 hover:text-white text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
