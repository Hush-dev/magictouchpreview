import React, { forwardRef } from 'react';

interface LogoSymbolProps {
  className?: string;
  color?: string;
}

const LogoSymbol = forwardRef<HTMLDivElement, LogoSymbolProps>(({ className = "", color = "bg-black" }, ref) => {
  return (
    <div ref={ref} className={`relative w-10 h-10 flex-shrink-0 ${className}`}>
      {/* Left Arch */}
      <div className={`logo-arch-left absolute left-0 bottom-0 w-5 h-10 ${color} rounded-t-full`} />
      {/* Orange Accent - Quarter Circle */}
      <div className="logo-accent absolute left-0 bottom-0 w-5 h-5 bg-[#ff6a00] rounded-tr-full" />
      {/* Right Arch */}
      <div className={`logo-arch-right absolute left-6 bottom-0 w-4 h-8 ${color} rounded-t-full`} />
    </div>
  );
});

LogoSymbol.displayName = 'LogoSymbol';

export default LogoSymbol;
