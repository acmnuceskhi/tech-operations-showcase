import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function FeaturedProjectCard({ project, index = 0, members = [] }) {
    const isEven = index % 2 === 0
    const navigate = useNavigate()

    // Map contributor IDs to actual member objects
    const contributors = project.contributors
        ? project.contributors
            .map(contributorId => members.find(m => m.id === contributorId))
            .filter(Boolean)
        : []

    return (
        <div
            className={`group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
            {project.image && (
                <div className="w-full lg:w-1/2 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            )}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-6">
                <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white arcade-font-white">
                        {project.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                        {project.fullDescription || project.desc}
                    </p>
                </div>

                {contributors.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3">Contributors</h4>
                        <div className="flex flex-wrap gap-2">
                            {contributors.map((contributor) => (
                                <button
                                    key={contributor.id}
                                    onClick={() => navigate(`/member/${contributor.id}`)}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 transition-all duration-200 hover:scale-105"
                                >
                                    <img
                                        src={contributor.image}
                                        alt={contributor.name}
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <span className="text-sm text-slate-200">{contributor.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => navigate(project.link)}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        <span>View Details</span>
                        <FaExternalLinkAlt className="text-sm" />
                    </button>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            <FaGithub className="text-lg" />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
