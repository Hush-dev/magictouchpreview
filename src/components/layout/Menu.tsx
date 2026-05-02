import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-menu"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-black z-[9000] flex flex-col items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-10 right-10 text-white hover:text-brand transition-colors p-2"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-8 md:gap-12">
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`group relative text-4xl md:text-7xl font-serif tracking-tight transition-colors duration-500 ${
                    location.pathname === item.path ? 'text-brand' : 'text-white'
                  } hover:text-brand`}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
