import React from 'react';

export const AZLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.2 : 1;

  return (
    <div className="flex flex-col items-center justify-center text-center select-none" style={{ transform: `scale(${scale})` }}>
      {/* SVG Emblem */}
      <div className="relative w-36 h-24 mb-1 flex items-center justify-center">
        <svg viewBox="0 0 200 130" className="w-full h-full drop-shadow-[0_4px_12px_rgba(212,175,55,0.25)]">
          <defs>
            {/* Metallic Gold Gradient */}
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#E5BE6B" />
              <stop offset="60%" stopColor="#B38023" />
              <stop offset="85%" stopColor="#F8E59B" />
              <stop offset="100%" stopColor="#8A5A10" />
            </linearGradient>

            <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5D77F" />
              <stop offset="100%" stopColor="#C89B38" />
            </linearGradient>

            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Roof "A" Structure */}
          <path
            d="M 68,68 L 100,20 L 132,68 L 118,68 L 100,41 L 82,68 Z"
            fill="url(#goldMetallic)"
          />
          <path
            d="M 100,10 L 140,70 L 150,70 L 100,0 L 50,70 L 60,70 Z"
            fill="url(#goldMetallic)"
          />

          {/* 4 Window Panes in A roof */}
          <g transform="translate(93, 47)" fill="url(#goldLight)">
            <rect x="0" y="0" width="6" height="6" rx="0.5" />
            <rect x="8" y="0" width="6" height="6" rx="0.5" />
            <rect x="0" y="8" width="6" height="6" rx="0.5" />
            <rect x="8" y="8" width="6" height="6" rx="0.5" />
          </g>

          {/* Stylized "Z" Bar intertwined */}
          <path
            d="M 112,28 L 168,28 L 168,39 L 128,88 L 175,88 L 175,100 L 112,100 L 112,89 L 152,40 L 112,40 Z"
            fill="url(#goldMetallic)"
          />

          {/* Base Accent Line */}
          <line
            x1="45"
            y1="108"
            x2="175"
            y2="108"
            stroke="url(#goldMetallic)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Text: AZ PROPERTY */}
      <div className="tracking-[0.35em] text-lg sm:text-xl font-extrabold gold-gradient-text uppercase font-cinzel">
        A Z &nbsp; P R O P E R T Y
      </div>

      {/* Tagline */}
      <p className="mt-3 text-sm sm:text-base text-[#f3e5ab]/90 font-serif-gold italic tracking-wide">
        Where quality feels at home.
      </p>

      {/* Subtagline */}
      <p className="text-[11px] sm:text-xs text-stone-300 tracking-wider font-light mt-0.5">
        Property services with pride.
      </p>
    </div>
  );
};
