import React from 'react'
import { FaCode, FaBug, FaLightbulb, FaTools, FaExternalLinkAlt } from 'react-icons/fa'

const typeIcons = {
  feature: FaLightbulb,
  bugfix: FaBug,
  code: FaCode,
  tool: FaTools,
  default: FaCode
}

const typeColors = {
  feature: 'from-green-500 to-emerald-500',
  bugfix: 'from-red-500 to-rose-500',
  code: 'from-slate-500 to-slate-600',
  tool: 'from-gray-500 to-gray-600',
  default: 'from-slate-500 to-slate-600'
}

export default function ContributionCard({ title, description, date, type = 'code', link }) {
  const Icon = typeIcons[type] || typeIcons.default
  const colorClass = typeColors[type] || typeColors.default

  return (
    <div className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-black/30 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:scale-[1.02]">
      
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white text-xl" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-slate-200 transition-colors">
              {title}
            </h3>
            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>

          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-3 text-xs">
            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${colorClass} text-white font-medium`}>
              {type}
            </span>
            {date && (
              <span className="text-slate-400">
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
