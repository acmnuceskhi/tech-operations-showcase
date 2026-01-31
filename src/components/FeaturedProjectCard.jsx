import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function FeaturedProjectCard({ project, index, members = [] }) {
    const navigate = useNavigate()
    const isEven = index % 2 === 0

    // Get contributor details
    const contributors = project.contributors && members
        ? project.contributors.map(id => members.find(m => m.id === id)).filter(Boolean)
        : []

    return (
        <div
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-black/45 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 hover:border-white/30 hover:bg-black/55 transition-all duration-500 group`}
        >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl">
                <div className="aspect-video bg-black/40 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors arcade-font-white">
                        {project.title}
                    </h3>
                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                        {project.fullDescription || project.desc}
                    </p>
                </div>

                {/* Contributors */}
                {contributors.length > 0 && (
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Contributors</h4>
                        <div className="flex flex-wrap gap-3">
                            {contributors.map((contributor) => (
                                <div
                                    key={contributor.id}
                                    onClick={() => navigate(`/member/${contributor.id}`)}
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer transition-all duration-300 hover:scale-105"
                                >
                                    <img
                                        src={contributor.image}
                                        alt={contributor.name}
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="text-xs sm:text-sm text-slate-200">{contributor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <button
                        onClick={() => navigate(project.link)}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        View Details
                        <FaExternalLinkAlt className="text-sm" />
                    </button>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-slate-200 hover:text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            <FaExternalLinkAlt className="text-lg" />
                            Live
                        </a>
                    )}
                    {project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-slate-200 hover:text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            <FaGithub className="text-lg" />
                            GitHub
                        </a>
                    ) : (
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-slate-400 font-semibold rounded-lg cursor-not-allowed">
                            <FaGithub className="text-lg" />
                            Code Private
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
