import React from 'react'

export default function InterstitialText({ text, subtext, align = 'center' }) {
    const alignmentClasses = {
        center: 'text-center items-center',
        left: 'text-left items-start',
        right: 'text-right items-end'
    }

    return (
        <div className={`flex flex-col ${alignmentClasses[align]} py-12 sm:py-16 px-4`}>
            <h2 className="text-[clamp(1.9rem,5.5vw,3.75rem)] font-bold text-white mb-4 arcade-font-white max-w-4xl px-1">
                {text}
            </h2>
            {subtext && (
                <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                    {subtext}
                </p>
            )}
        </div>
    )
}
