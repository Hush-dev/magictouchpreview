import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  projectName: string;
  projectId: string;
  projectImage: string;
  rating?: number;
  key?: React.Key;
}

export default function TestimonialCard({ 
  quote, 
  clientName, 
  projectName, 
  projectId, 
  projectImage,
  rating = 5 
}: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700"
    >
      {/* Review Text */}
      <div className="mb-8 flex-grow">
        <span className="text-brand text-4xl font-serif block mb-4 opacity-40">“</span>
        <p className="text-black font-sans text-lg md:text-xl leading-relaxed italic">
          {quote}
        </p>
      </div>

      {/* Client Info */}
      <div className="mb-10">
        <h4 className="font-sans font-bold text-black text-sm uppercase tracking-widest mb-2">{clientName}</h4>
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={12} className="fill-brand stroke-brand" />
          ))}
        </div>
      </div>

      {/* Inner Project Card */}
      <Link to={`/project/${projectId}`} className="group relative block">
        <div className="bg-neutral-50 rounded-xl p-4 flex items-center justify-between border border-black/5 transition-all duration-500 group-hover:border-brand/20 group-hover:bg-white">
          <div className="flex-grow pr-4">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Related Project</p>
            <h5 className="font-serif text-base text-black mb-2 group-hover:text-brand transition-colors">{projectName}</h5>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-brand transition-colors">
              <span>View Project</span>
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-lg">
            <img 
              src={projectImage} 
              alt={projectName} 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
