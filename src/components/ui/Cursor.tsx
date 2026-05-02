import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursor } from '../../context/CursorContext';

export default function Cursor() {
  const { isHovering, cursorType } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: cursorType === 'view' ? 6 : 2,
        backgroundColor: cursorType === 'view' ? 'rgba(255, 106, 0, 0.2)' : '#ff6a00',
        backdropFilter: cursorType === 'view' ? 'blur(4px)' : 'none',
        border: cursorType === 'view' ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
        mixBlendMode: cursorType === 'view' ? 'normal' : 'difference',
        duration: 0.4,
        ease: 'power3.out'
      });
      if (cursorType === 'view') {
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
  }, [isHovering, cursorType]);

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

