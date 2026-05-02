import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Home as HomeIcon, Award } from 'lucide-react';
import TextReveal from '../components/ui/TextReveal';
import { PROJECTS } from '../constants';
import Cursor from '../components/ui/Cursor';
import ExperienceCard from '../components/ui/ExperienceCard';
import HeroSlider from '../components/ui/HeroSlider';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'view'>('default');

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-bottom', { y: 50, opacity: 0, duration: 1.2, ease: 'power4.out' });

      gsap.to('.hero-bg', {
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    // Horizontal Scroll
    const horizCtx = gsap.context(() => {
      const sections = gsap.utils.toArray('.horizontal-section');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "center center",
          end: () => `+=${horizontalRef.current?.offsetWidth || 0}`,
          invalidateOnRefresh: true,
        }
      });
    }, triggerRef);

    return () => {
      ctx.revert();
      horizCtx.revert();
    };
  }, []);

  const handleProjectHover = (hovering: boolean) => {
    setCursorHover(hovering);
    setCursorType(hovering ? 'view' : 'default');
  };

  return (
    <div className="bg-bg">
      <HeroSlider />
      <Cursor isHovering={cursorHover} type={cursorType} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col pt-32 pb-12 px-8 md:px-12 md:pt-48 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow">
          {/* Left Section: Hero Text */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between py-4 z-10">
            <div>
              <p className="hero-bottom text-sm uppercase tracking-[0.2em] font-light max-w-xs leading-relaxed opacity-60 font-sans">
                Transforming spaces with a subtle touch. A high-end creative studio experience.
              </p>
            </div>
            
            {/* Reveal Animation Placeholder Link */}
            <div className="mt-12 md:mt-0 font-sans text-xl font-medium leading-tight max-w-[280px]">
              <span className="text-black inline-block mr-1">We don't just</span>
              <span className="text-brand inline-block mr-1">design spaces,</span>
              <span className="text-neutral-400 inline-block mr-1">we transform</span>
              <span className="text-neutral-300 inline-block mr-1">how they</span>
              <span className="text-neutral-200 inline-block">feel.</span>
            </div>
          </div>

          {/* Right Section: Immersive Imagery */}
          <div 
            className="col-span-1 md:col-span-7 relative group min-h-[500px] md:min-h-0"
            onMouseEnter={() => handleProjectHover(true)}
            onMouseLeave={() => handleProjectHover(false)}
          >
            <div className="w-full h-full bg-gray-soft rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400" 
                  className="hero-bg w-full h-full object-cover grayscale brightness-90 group-hover:brightness-100 transition-all duration-1000"
                  alt="Interior"
                />
              </div>

              {/* Project Title Overlay */}
              <div className="absolute bottom-12 left-12 text-white z-10">
                <div className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Featured Space</div>
                <div className="text-3xl md:text-5xl font-serif italic tracking-tight">The Modern Monolith</div>
              </div>
            </div>

            {/* Counter / Rail Simulation */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6">
              <span className="text-[10px] rotate-90 tracking-widest text-brand font-bold">01</span>
              <div className="w-[1px] h-32 bg-gray-200 relative">
                <div className="absolute top-0 left-0 w-full h-8 bg-brand animate-pulse" />
              </div>
              <span className="text-[10px] rotate-90 tracking-widest text-gray-400 font-bold">0{PROJECTS.length}</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator refined */}
        <div className="mt-12 md:mt-24 flex items-center justify-center md:justify-between border-t border-gray-100 pt-8 text-[10px] uppercase tracking-[0.2em] font-medium font-sans">
          <div className="hidden md:flex gap-12">
          </div>
          <div className="flex items-center gap-4">
            <span className="animate-bounce">Scroll to explore</span>
            <div className="w-px h-8 bg-black/10 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-12 md:py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <TextReveal 
          text="We don't just design spaces. We transform how they feel. Architecture is more than walls; it is the silent orchestrator of our daily rhythm. Magic Touch Design brings an editorial precision to the art of living."
          className="font-serif text-3xl md:text-6xl leading-[1.2] !text-black"
        />
      </section>

      {/* Trust & Experience Section */}
      <section className="py-12 md:py-20 px-8 md:px-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ExperienceCard 
              number="100+" 
              label="Spaces crafted" 
              backText="Designed with precision and purpose" 
              Icon={HomeIcon}
            />
            <ExperienceCard 
              number="5+" 
              label="Years experience" 
              backText="Delivering consistent quality interiors" 
              Icon={Award}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects - Vertical */}
      <section className="py-20 px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 mb-12">
          <h2 className="font-serif text-4xl md:text-7xl">Featured Work</h2>
          <Link 
            to="/work" 
            className="group flex items-center justify-between md:justify-start gap-4 font-sans uppercase tracking-[0.2em] text-[10px] md:text-sm font-bold border border-black/10 md:border-none px-6 py-4 md:p-0 w-full md:w-auto hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-brand transition-all duration-500"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {PROJECTS.filter(p => p.featured).slice(0, 2).map((project, idx) => (
            <Link 
              key={project.id}
              to={`/project/${project.id}`}
              className={`project-card relative group ${idx % 2 === 1 ? 'md:mt-40' : ''}`}
              onMouseEnter={() => handleProjectHover(true)}
              onMouseLeave={() => handleProjectHover(false)}
            >
              <div className="overflow-hidden aspect-[4/5] bg-neutral-100">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="project-image-hover w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{project.category}</p>
                  <h3 className="font-serif text-3xl">{project.title}</h3>
                </div>
                <span className="font-sans text-sm">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={triggerRef} className="overflow-hidden bg-black text-white py-20">
        <div ref={horizontalRef} className="flex flex-nowrap w-fit">
          <div className="horizontal-section min-h-[85vh] md:h-screen w-screen flex flex-col justify-center px-8 md:px-20 pt-20 md:pt-0">
            <h2 className="font-serif text-5xl md:text-9xl mb-6">Our Narrative</h2>
            <p className="text-neutral-500 max-w-xl text-lg font-sans">
              Discover how we blend textures, light, and geometry to create immersive environments that tell a unique story.
            </p>
          </div>
          
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="horizontal-section min-h-[85vh] md:h-screen w-screen flex items-center justify-center px-8 md:px-20 py-24 md:py-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center max-w-6xl w-full h-full md:h-auto">
                <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-sm">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="md:p-10 flex flex-col justify-center">
                  <span className="text-brand text-lg md:text-xl font-mono mb-2 md:mb-4 block tracking-widest opacity-80">
                    [{String(PROJECTS.indexOf(project) + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="text-3xl md:text-6xl font-serif mb-4 md:mb-6">{project.title}</h3>
                  <p className="text-neutral-400 mb-6 md:mb-8 max-w-md text-sm md:text-base line-clamp-3 md:line-clamp-none">{project.description}</p>
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-block py-3 px-6 md:py-4 md:px-8 border border-white/20 hover:bg-white hover:text-black transition-colors font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold w-fit"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-8 text-center bg-bg">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-widest mb-8">Our Philosophy</span>
          <TextReveal 
            text="Simplicity is the ultimate sophistication. We believe in the power of negative space and the poetry of essential forms."
            className="font-serif text-3xl md:text-6xl leading-[1.1] mb-12"
          />
          <Link 
            to="/about"
            className="group inline-flex items-center gap-4 py-5 px-10 bg-black text-white hover:bg-brand transition-all duration-500 font-sans uppercase tracking-[0.3em] text-xs font-bold"
          >
            Learn More <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <TestimonialSlider />

      {/* Final CTA */}
      <section className="py-40 px-8 md:px-20 bg-neutral-50 flex flex-col items-center justify-center">
        <h2 className="font-serif text-5xl md:text-[12rem] tracking-tighter text-black text-center mb-12">
          Let's design<br />your space
        </h2>
        <Link 
          to="/contact" 
          className="text-2xl md:text-4xl font-serif italic border-b-2 border-brand pb-2 hover:text-brand transition-colors"
        >
          Get in touch with the magic touch &rarr;
        </Link>
      </section>

      {/* Footer is missing, I'll add it to App later */}
    </div>
  );
}
