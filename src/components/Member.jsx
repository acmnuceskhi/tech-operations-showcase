import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Member({ name, image, linkedin, github, profileLink }) {
  const handleCardClick = () => {
    const url = profileLink || linkedin || github
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        onClick={handleCardClick}
        className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-8 min-w-[320px] group-hover:bg-slate-800/60 group-hover:border-slate-600/80 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-900/20 flex flex-col items-center hover:scale-105 cursor-pointer"
      >
        
        <div className="relative mb-6">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] group-hover:scale-105 transition-transform duration-300 animate-pulse group-hover:animate-none">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
          {name}
        </h3>
        
        <div className="flex justify-center gap-4">
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-12 h-12 rounded-lg bg-slate-700/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
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
              className="w-12 h-12 rounded-lg bg-slate-700/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
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
