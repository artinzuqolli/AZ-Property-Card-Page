import React from 'react';
import logoImgPath from '../assets/images/az_logo.png';

export const AZLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const scale = size === 'sm' ? 0.85 : size === 'lg' ? 1.15 : 1;

  return (
    <div className="flex flex-col items-center justify-center text-center select-none" style={{ transform: `scale(${scale})` }}>
      {/* Image Emblem */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-[0_8px_25px_rgba(0,0,0,0.8)] p-2 bg-black/60 backdrop-blur-sm group flex items-center justify-center">
        <img
          src={logoImgPath}
          alt="AZ Property Logo"
          className="w-full h-full object-contain rounded-xl scale-90 transition-transform duration-300 group-hover:scale-95"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Main Text: AZ PROPERTY */}
      <div className="tracking-[0.2em] text-xl sm:text-2xl font-extrabold font-sans uppercase whitespace-nowrap">
        <span className="text-white">AZ</span>&nbsp;<span className="gold-gradient-text">PROPERTY</span>
      </div>

      {/* Tagline */}
      <p className="mt-2 text-xs sm:text-sm text-[#f3e5ab]/90 font-sans tracking-wide font-medium">
        Where quality feels at home.
      </p>

    </div>
  );
};

