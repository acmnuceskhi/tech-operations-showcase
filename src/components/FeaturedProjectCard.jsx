import React from 'react'

export default function FeaturedProjectCard({ project, index = 0 }) {
    const isEven = index % 2 === 0

    return (
        <a
            href={project.link}
            rel="noopener noreferrer"
            className={`group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {project.image && (
                <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white group-hover:text-slate-200 transition-colors arcade-font-white">
                    {project.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                    {project.fullDescription || project.desc}
                </p>
            </div>
        </a>
    )
}
