import React from 'react'

export default function InterstitialText({ text, subtext, align = 'center' }) {
    const alignmentClasses = {
        center: 'text-center items-center',
        left: 'text-left items-start',
        right: 'text-right items-end'
    }

    return (
        <div className={`flex flex-col ${alignmentClasses[align]} py-12 sm:py-16 px-4`}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 arcade-font-white max-w-4xl">
                {text}
            </h2>
            {subtext && (
                <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    {subtext}
                </p>
            )}
        </div>
    )
}
