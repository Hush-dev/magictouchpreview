import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
  number: string;
  label: string;
  backText: string;
  Icon: LucideIcon;
}

export default function ExperienceCard({ number, label, backText, Icon }: ExperienceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const countValue = useMotionValue(0);
  const targetNumber = parseInt(number.replace(/\D/g, '')) || 0;
  const rounded = useTransform(countValue, (latest) => Math.round(latest));
  const hasPlus = number.includes('+');

  useEffect(() => {
    const controls = animate(countValue, targetNumber, {
      duration: 1.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [targetNumber, countValue]);

  return (
    <motion.div 
      className="relative w-full h-44 md:h-52 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white border border-black/5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 group overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-1 h-full bg-black/5 group-hover:bg-brand transition-colors duration-500" />
          
          {/* Top Left Icon */}
          <div className="text-neutral-800 group-hover:text-brand transition-colors duration-500">
            <Icon size={24} strokeWidth={1.5} />
          </div>

          {/* Bottom Left Content */}
          <div className="text-left">
            <div className="flex items-baseline gap-0.5">
              <motion.h3 className="font-mono text-5xl md:text-6xl font-semibold tracking-tight text-black">
                {rounded}
              </motion.h3>
              {hasPlus && <span className="text-brand text-2xl md:text-3xl font-semibold">+</span>}
            </div>
            <p className="font-sans text-sm md:text-base font-normal text-neutral-400 group-hover:text-black transition-colors">
              {label}
            </p>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute -right-4 bottom-4 w-12 h-12 bg-brand/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-black rounded-xl flex flex-col items-center justify-center p-6 text-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="font-serif text-lg md:text-xl text-white leading-tight italic">
            {backText}
          </p>
          <div className="mt-4 w-6 h-[1px] bg-brand/50" />
        </div>
      </motion.div>
    </motion.div>
  );
}
