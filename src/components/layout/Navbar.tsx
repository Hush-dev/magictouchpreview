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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[8000] px-8 py-4 md:px-12 md:py-6 transition-all duration-500 flex justify-between items-center ${
          scrolled ? 'bg-white/80 backdrop-blur-md py-2 md:py-3 shadow-sm' : ''
        }`}
      >
        <Link 
          to="/" 
          className="group transition-opacity hover:opacity-80"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <span className="hidden md:block text-[11px] uppercase tracking-[0.3em] font-medium text-black">Menu</span>
          <button 
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 md:w-12 md:h-12 border border-black rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer group hover:bg-black transition-colors"
          >
            <span className="w-5 h-[1px] bg-black transition-colors group-hover:bg-white" />
            <span className="w-5 h-[1px] bg-black transition-colors group-hover:bg-white" />
          </button>
        </div>
      </nav>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
