import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Member({ name, nickname, title, image, linkedin, github, profileLink, starPerformer }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    const url = profileLink || linkedin || github
    if (url && url !== '#') {
      // Check if it's an internal link
      if (url.startsWith('/')) {
        navigate(url)
      } else {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        onClick={handleCardClick}
        className="bg-black/45 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[360px] shadow-xl shadow-black/60 group-hover:bg-black/55 group-hover:border-white/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/70 flex flex-col items-center justify-center hover:scale-105 cursor-pointer relative"
      >
        <div className="relative mb-8">
          {/* Gradient border wrapper */}
          <div className="relative w-52 h-52 rounded-full bg-linear-to-br from-gray-400 via-white to-gray-500 p-[3px] group-hover:from-gray-300 group-hover:via-white group-hover:to-gray-400 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-1 group-hover:text-slate-200 transition-all duration-300">
          {name}
        </h3>

        {nickname && (
          <p className="text-xs text-slate-300 text-center mb-3 font-medium italic">
            {nickname}
          </p>
        )}

        <div className="flex items-center justify-center gap-2 mb-6">
          {title && (
            <p className="text-sm text-slate-300 text-center font-medium">
              {title}
            </p>
          )}
          {starPerformer && (
            <span className="px-2 py-1 bg-slate-600/60 border border-slate-500/60 text-slate-200 text-xs font-medium rounded-full">
              ★ Star Performer
            </span>
          )}
        </div>

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
              <FaLinkedin className="text-slate-200 hover:text-white text-xl" />
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
              <FaGithub className="text-slate-200 hover:text-white text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
