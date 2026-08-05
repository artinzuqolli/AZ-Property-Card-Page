import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'dark' | 'cream';
  compact?: boolean;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  href,
  variant = 'dark',
  compact = false,
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.015, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={`
        relative w-full rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer shadow-lg overflow-hidden group
        ${
          variant === 'dark'
            ? 'bg-[#111111] hover:bg-[#18181b] text-white border border-white/10 hover:border-[#C5A059]/50 shadow-black/60'
            : 'bg-[#FAF6EE] hover:bg-[#F2ECE0] text-[#121212] border border-[#E5DAC3] shadow-black/10'
        }
        ${compact ? 'p-3 sm:p-3.5' : 'p-3.5 sm:p-4'}
      `}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Icon Container */}
        <div
          className={`
            flex-shrink-0 flex items-center justify-center rounded-xl transition-colors
            ${
              variant === 'dark'
                ? 'text-[#C5A059] group-hover:text-white'
                : 'text-[#8A6A23] group-hover:text-[#A68028]'
            }
          `}
        >
          {icon}
        </div>

        {/* Text Area */}
        <div className="flex flex-col min-w-0">
          <span
            className={`
              font-semibold leading-tight tracking-tight text-sm sm:text-[15px] truncate
              ${variant === 'dark' ? 'text-zinc-100' : 'text-zinc-900'}
            `}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className={`
                text-xs sm:text-[13px] leading-tight truncate mt-0.5
                ${variant === 'dark' ? 'text-zinc-400 group-hover:text-amber-200/90' : 'text-zinc-600'}
              `}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Right Chevron */}
      <ChevronRight
        className={`
          w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5
          ${variant === 'dark' ? 'text-zinc-500 group-hover:text-[#C5A059]' : 'text-zinc-500'}
        `}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="block w-full text-left outline-none"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="w-full text-left outline-none">
      {content}
    </button>
  );
};
