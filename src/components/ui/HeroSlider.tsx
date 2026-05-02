import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400',
  'https://images.unsplash.com/photo-1574091213054-34176707324c?auto=format&fit=crop&q=80&w=2400'
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full p-4 md:p-6 pt-20 md:pt-24 bg-bg flex flex-col">
      <div className="relative w-full flex-grow overflow-hidden rounded-xl md:rounded-2xl bg-black shadow-xl">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img 
                src={IMAGES[currentIndex]} 
                alt="Luxury Interior" 
                className="w-full h-full object-cover grayscale brightness-[0.4]"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center px-8 md:px-16 text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-6">
                Where Spaces Become <br className="hidden md:block" /> Experiences
              </h1>
              <p className="text-neutral-400 font-sans text-sm md:text-base max-w-sm mb-10 font-light leading-relaxed">
                A leading interior design studio in Chandrapur, creating thoughtful and refined spaces tailored to your rhythm.
              </p>

              <div className="flex flex-row gap-3">
                <Link 
                  to="/work"
                  className="group relative inline-flex items-center justify-center py-2 px-4 bg-white text-black font-sans text-[11px] md:text-xs font-medium transition-all hover:bg-brand hover:text-white rounded-lg w-fit whitespace-nowrap"
                >
                  Explore the Work
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/contact"
                  className="group inline-flex items-center justify-center py-2 px-4 border border-white/20 text-white font-sans text-[11px] md:text-xs font-medium transition-all hover:border-brand hover:text-brand rounded-lg w-fit whitespace-nowrap"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Progress Bar Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === currentIndex 
                  ? 'w-6 h-1 bg-brand' 
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
