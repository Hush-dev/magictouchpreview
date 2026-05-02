import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import Logo from '../ui/Logo';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

const SERVICE_LINKS = [
  { name: 'Residential Design', path: '/services' },
  { name: 'Commercial Design', path: '/services' },
  { name: 'Custom Interiors', path: '/services' }
];

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-black pt-24 pb-12 px-8 md:px-12 border-t border-white/5 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 mb-24">
        {/* Left Side: Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/">
              <Logo variant="light" />
            </Link>
          </div>
          <p className="text-neutral-500 font-light text-sm md:text-base max-w-xs tracking-wide uppercase">
            Transforming spaces with a subtle touch
          </p>
        </div>

        {/* Right Side: Columns */}
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="group relative inline-block text-sm font-medium text-white transition-colors hover:text-brand"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-8">Services</h4>
            <ul className="flex flex-col gap-4">
              {SERVICE_LINKS.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="group relative inline-block text-sm font-medium text-white transition-colors hover:text-brand"
                  >
                    {service.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-600 mb-8">Contact / Info</h4>
            <ul className="flex flex-col gap-6 text-sm font-medium text-white">
              <li>
                <a href="mailto:magictouchdesign@gmail.com" className="group relative inline-block transition-colors hover:text-brand">
                  magictouchdesign@gmail.com
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li className="text-neutral-500 font-light">+91 83903 51213</li>
              <li className="text-neutral-500 font-light leading-relaxed">
                Durgapurohit House, Samadhi Ward<br />
                Chandrapur, Maharashtra
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-600">
        <p>&copy; 2026 Magic Touch Design</p>
        <div className="flex items-center gap-2">
          <span>Designed by </span>
          <span className="text-brand">Hey Social</span>
        </div>
      </div>
    </motion.footer>
  );
}
