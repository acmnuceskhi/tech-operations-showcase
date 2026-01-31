import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ title, desc, image, link, url, githubUrl }) {
  return (
    <div className="group relative bg-black/45 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl shadow-black/60 hover:border-white/35 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/70 flex flex-col">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-slate-200 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-200 leading-relaxed flex-1 mb-4">
          {desc}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={link}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >
            View Details
            <FaExternalLinkAlt className="text-xs" />
          </a>

          <div className="flex gap-2">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live
              </a>
            )}

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-all duration-300"
              >
                <FaGithub className="text-sm" />
                Code
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 text-slate-500 text-xs font-semibold rounded-lg cursor-not-allowed">
                <FaGithub className="text-sm" />
                Private
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
