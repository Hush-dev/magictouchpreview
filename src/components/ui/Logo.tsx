import React from 'react';
import LogoSymbol from './LogoSymbol';

export default function Logo({ className = "", variant = "dark" }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'dark' ? 'text-black' : 'text-white';
  const iconColor = variant === 'dark' ? 'bg-black' : 'bg-white';
  
  return (
    <div className={`flex items-center gap-2.5 ${className} scale-100 origin-left transition-transform duration-500`}>
      <LogoSymbol color={iconColor} />

      {/* Text Part */}
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-sans font-bold tracking-tight ${textColor} lowercase`}>
          magic touch
        </span>
        <span className={`text-[6px] font-sans font-medium tracking-[0.4em] ${textColor} uppercase mt-0.5 opacity-60`}>
          interior design
        </span>
      </div>
    </div>
  );
}
