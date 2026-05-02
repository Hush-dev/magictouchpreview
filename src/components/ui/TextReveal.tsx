import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, 
        { 
          opacity: 0.1,
          color: '#e5e7eb' // light gray-200
        }, 
        {
          opacity: 1,
          color: '#0e0e0e',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 40%",
            scrub: true,
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.3em] overflow-hidden">
          {word.split("").map((char, j) => (
            <span key={j} className="char inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
