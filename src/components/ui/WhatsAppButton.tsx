import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useCursor } from '../../context/CursorContext';

export default function WhatsAppButton() {
  const { setCursorType, setIsHovering } = useCursor();
  const phoneNumber = "918390351213"; // Based on your Contact page
  const message = "Hello Magic Touch Design, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleHover = (hovering: boolean) => {
    setIsHovering(hovering);
    setCursorType(hovering ? 'view' : 'default');
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
    >
      {/* Subtle Pulsing Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-brand rounded-full blur-xl"
      />

      {/* Main Button Container */}
      <div className="relative flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl border border-white/10 group overflow-hidden">
        {/* Hover Background Slide */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          
        </div>
      </div>
    </motion.a>
  );
}
