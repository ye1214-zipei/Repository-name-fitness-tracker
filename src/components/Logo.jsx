import React from 'react'

const Logo = () => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="url(#bgGradient)" />
      
      {/* Inner Glow */}
      <circle cx="100" cy="100" r="85" fill="none" stroke="white" strokeWidth="3" opacity="0.3"/>
      
      {/* Running Figure */}
      <g transform="translate(50, 45)">
        {/* Head */}
        <circle cx="50" cy="20" r="12" fill="white"/>
        
        {/* Body */}
        <path d="M50 32 L50 65" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        
        {/* Arms */}
        <path d="M35 45 L50 38 L65 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        
        {/* Legs */}
        <path d="M50 65 L35 95" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M50 65 L70 85" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none"/>
      </g>
      
      {/* Speed Lines */}
      <path d="M25 70 L40 70" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
      <path d="M20 85 L38 85" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
      <path d="M25 100 L42 100" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
          <stop offset="50%" style={{ stopColor: '#8B5CF6' }} />
          <stop offset="100%" style={{ stopColor: '#F97316' }} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
