import React from 'react'

export default function ProjectCard({ title, desc, image, link }) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="group relative bg-black/45 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl shadow-black/60 hover:border-white/35 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
    >
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
        <p className="text-xs text-slate-200 leading-relaxed flex-1">
          {desc}
        </p>
      </div>
    </a>
  )
}
