import React from 'react'

export default function TechChip({ children, icon: Icon, color }) {
  return (
    <div className="group inline-flex flex-col items-center gap-2 min-w-[85px]">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-black/45 backdrop-blur-md border border-white/20 hover:border-white/30 hover:bg-black/55 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-black/70 p-3.5 relative overflow-hidden">
        {/* Gradient glow effect on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {Icon && (
          <Icon 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" 
            style={{ color: color }}
          />
        )}
      </div>
      
      <span className="text-sm font-medium text-slate-200 group-hover:text-white group-hover:font-semibold group-hover:scale-105 transition-all duration-300 text-center leading-tight">
        {children}
      </span>
    </div>
  )
}
