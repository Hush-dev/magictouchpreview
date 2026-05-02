import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TestimonialCard from './TestimonialCard';
import { PROJECTS } from '../../constants';

const TESTIMONIALS = [
  {
    quote: "The transformation was beyond what we imagined. Every detail felt intentional and perfectly balanced.",
    clientName: "Sarah Jenkins",
    projectName: PROJECTS[0].title,
    projectId: PROJECTS[0].id,
    projectImage: PROJECTS[0].thumbnail,
  },
  {
    quote: "Magic Touch Design truly has a gift. They managed to make our office feel like home while keeping it professional.",
    clientName: "Michael Chen",
    projectName: PROJECTS[1].title,
    projectId: PROJECTS[1].id,
    projectImage: PROJECTS[1].thumbnail,
  },
  {
    quote: "Editorial precision is an understatement. Our space is now our favorite place on earth.",
    clientName: "Elena Rodriguez",
    projectName: PROJECTS[2].title,
    projectId: PROJECTS[2].id,
    projectImage: PROJECTS[2].thumbnail,
  },
  {
    quote: "They don't just design rooms; they curate experiences. Highly recommend for high-end residential projects.",
    clientName: "David Thompson",
    projectName: PROJECTS[3].title,
    projectId: PROJECTS[3].id,
    projectImage: PROJECTS[3].thumbnail,
  },
  {
    quote: "A seamless process from concept to completion. The result is a space that breathes and inspires daily.",
    clientName: "Sophia Liu",
    projectName: PROJECTS[4].title,
    projectId: PROJECTS[4].id,
    projectImage: PROJECTS[4].thumbnail,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-16 md:py-24 px-8 md:px-20 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-widest mb-6">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-7xl">What our clients say</h2>
        </motion.div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard 
              key={i} 
              quote={testimonial.quote}
              clientName={testimonial.clientName}
              projectName={testimonial.projectName}
              projectId={testimonial.projectId}
              projectImage={testimonial.projectImage}
            />
          ))}
        </div>

        {/* Mobile/Tablet Layout (Slider) */}
        <div className="lg:hidden relative">
          <div 
            className="flex flex-col items-center"
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) {
                    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
                  } else if (info.offset.x < -100) {
                    nextSlide();
                  }
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <TestimonialCard 
                  quote={TESTIMONIALS[currentIndex].quote}
                  clientName={TESTIMONIALS[currentIndex].clientName}
                  projectName={TESTIMONIALS[currentIndex].projectName}
                  projectId={TESTIMONIALS[currentIndex].projectId}
                  projectImage={TESTIMONIALS[currentIndex].projectImage}
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3 mt-12">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    i === currentIndex ? 'w-8 bg-brand' : 'w-2 bg-black/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
