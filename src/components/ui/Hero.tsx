import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400',
    title: 'The Modern Monolith',
    year: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2400',
    title: 'Editorial Minimalism',
    year: '2023'
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic Intro Sequence
    const introCtx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsIntroFinished(true)
      });

      // Phase 1: Background Zoom Out with Darkening
      tl.fromTo(bgRef.current, 
        { scale: 1.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2.2, ease: 'power4.out' }
      );

      // Animate overlay and image opacity during the zoom
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.2, ease: 'power4.out' },
        '<'
      );

      tl.fromTo('.hero-bg-img',
        { opacity: 1, filter: 'grayscale(0) brightness(1)' },
        { opacity: 0.4, filter: 'grayscale(1) brightness(0.7)', duration: 2.2, ease: 'power4.out' },
        '<'
      );

      // Phase 2: Staggered Content Reveal
      tl.fromTo('.hero-headline span', 
        { y: 60, opacity: 0, rotateX: -30 }, 
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.1, ease: 'expo.out' },
        '-=1.5'
      );

      tl.fromTo(['.hero-p', '.hero-btns'], 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
        '-=1'
      );
    }, containerRef);

    // Image Cycle
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 15000);

    // Scroll Parallax
    const scrollCtx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.98,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => {
      clearInterval(timer);
      introCtx.revert();
      scrollCtx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full bg-[#050505] overflow-hidden flex items-center justify-center py-20">
      {/* Background with Parallax and Intro Zoom */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] w-full origin-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isIntroFinished ? 0.4 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={IMAGES[index].url} 
              alt={IMAGES[index].title} 
              className={`hero-bg-img w-full h-full object-cover contrast-[1.05] ${isIntroFinished ? 'grayscale brightness-[0.7]' : ''}`}
            />
          </motion.div>
        </AnimatePresence>
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Main Content Area */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
        <div className="w-full">
          <div className="hero-p h-4 mb-8 md:mb-12" />
          
          <h1 className="hero-headline font-serif 
text-[clamp(3rem,12vw,9rem)] 
md:text-[clamp(2.5rem,8vw,9rem)] 
text-white leading-[0.85] tracking-tighter mb-8 md:mb-12 select-none">
            <span className="inline-block">Where Spaces</span> <br />
            <span className="inline-block italic font-light text-neutral-400">Become</span>{' '}
            <span className="inline-block">Experiences</span>
          </h1>
          
          <p className="hero-p text-white/30 font-sans text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed tracking-wide italic px-4">
            A leading interior design studio in Chandrapur, creating thoughtful and refined spaces tailored to your rhythm.
          </p>

          <div className="hero-btns flex flex-col items-center gap-8 mt-4">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link 
                to="/work"
                className="group flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-brand hover:text-white transition-colors duration-300"
              >
                Explore Work
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
            
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="group relative px-12 py-5 bg-white text-black text-[10px] font-sans font-bold uppercase tracking-[0.5em] overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-brand translate-y-[110%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.22,1,0.36,1] will-change-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Marks */}
      <div className="absolute left-8 md:left-12 bottom-12 hidden lg:flex flex-col items-center gap-4 opacity-20 transition-opacity duration-1000 hover:opacity-100">
        <span className="text-[8px] uppercase tracking-[0.6em] text-white [writing-mode:vertical-lr] rotate-180">Edition 2024</span>
        <div className="w-[1px] h-12 bg-white/40" />
      </div>
      <div className="absolute right-8 md:right-12 bottom-12 hidden lg:flex flex-col items-center gap-4 opacity-20 transition-opacity duration-1000 hover:opacity-100">
        <div className="w-[1px] h-12 bg-white/40" />
        <span className="text-[8px] uppercase tracking-[0.6em] text-white [writing-mode:vertical-lr]">Chandrapur, IN</span>
      </div>

      {/* Minimal Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-30">
        <div className="w-[1px] h-14 bg-white/10 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-brand origin-top"
            animate={{ scaleY: [0, 1, 0], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
