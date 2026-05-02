import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';

import Logo from '../ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isScrolled = scrolled;
  const isLightMode = isHomePage && !isScrolled;

  const logoVariant = isLightMode ? 'light' : 'dark';
  const textColor = isLightMode ? 'text-white' : 'text-black';
  const btnBorderColor = isLightMode ? 'border-white/30 hover:border-white' : 'border-black';
  const btnIconColor = isLightMode ? 'bg-white' : 'bg-black';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[8000] px-8 py-4 md:px-12 md:py-6 transition-all duration-700 flex justify-between items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-2 md:py-3 shadow-small' : 'bg-transparent'
        }`}
      >
        <Link 
          to="/" 
          className="group transition-opacity hover:opacity-80"
        >
          <Logo variant={logoVariant} />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <span className={`hidden md:block text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-500 ${textColor}`}>
            Studio
          </span>
          <button 
            onClick={() => setIsOpen(true)}
            className={`w-10 h-10 md:w-12 md:h-12 border rounded-lg flex flex-col items-center justify-center gap-1.5 cursor-pointer group transition-all duration-500 ${btnBorderColor} ${!isLightMode ? 'hover:bg-black' : 'hover:bg-white'}`}
          >
            <span className={`w-5 h-[1px] transition-colors duration-500 ${btnIconColor} ${!isLightMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`} />
            <span className={`w-5 h-[1px] transition-colors duration-500 ${btnIconColor} ${!isLightMode ? 'group-hover:bg-white' : 'group-hover:bg-black'}`} />
          </button>
        </div>
      </nav>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
