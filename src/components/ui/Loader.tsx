import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoSymbol from './LogoSymbol';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Reset initial states
      gsap.set('.logo-arch-left', { scaleY: 0, transformOrigin: 'bottom' });
      gsap.set('.logo-arch-right', { scaleY: 0, transformOrigin: 'bottom' });
      gsap.set('.logo-accent', { scale: 0, opacity: 0 });

      tl.to('.logo-arch-left', {
        scaleY: 1,
        duration: 0.8,
        ease: 'power4.out'
      })
      .to('.logo-arch-right', {
        scaleY: 1,
        duration: 0.8,
        ease: 'power4.out'
      }, '-=0.6')
      .to('.logo-accent', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      .to(logoRef.current, {
        scale: 1.1,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[10000] flex items-center justify-center pointer-events-auto"
    >
      <LogoSymbol ref={logoRef} color="bg-white" className="scale-[2.5]" />
    </div>
  );
}
