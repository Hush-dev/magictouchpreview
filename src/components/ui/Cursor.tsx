import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CursorProps {
  isHovering?: boolean;
  type?: 'default' | 'view';
}

export default function Cursor({ isHovering = false, type = 'default' }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: type === 'view' ? 6 : 2,
        backgroundColor: type === 'view' ? 'rgba(255, 106, 0, 0.2)' : '#ff6a00',
        backdropFilter: type === 'view' ? 'blur(4px)' : 'none',
        border: type === 'view' ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
        mixBlendMode: type === 'view' ? 'normal' : 'difference',
        duration: 0.4,
        ease: 'power3.out'
      });
      if (type === 'view') {
        gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
      }
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: '#0e0e0e',
        backdropFilter: 'none',
        border: 'none',
        mixBlendMode: 'difference',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
    }
  }, [isHovering, type]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      style={{ mixBlendMode: 'difference' }}
    >
      <span 
        ref={textRef} 
        className="text-[3px] font-sans font-medium text-white opacity-0 whitespace-nowrap uppercase tracking-widest"
      >
        View
      </span>
    </div>
  );
}
