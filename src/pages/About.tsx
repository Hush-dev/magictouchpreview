import React from 'react';
import TextReveal from '../components/ui/TextReveal';
import { ArrowDownRight } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function About() {
  const { setCursorType, setIsHovering } = useCursor();
  
  const handleHover = (isHovering: boolean, type: 'default' | 'view' = 'default') => {
    setIsHovering(isHovering);
    setCursorType(type);
  };

  return (
    <div className="bg-bg min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-8 md:px-20 max-w-7xl mx-auto">
        <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-none mb-12">The subtle<br />art of mood.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div 
            className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            onMouseEnter={() => handleHover(true, 'view')}
            onMouseLeave={() => handleHover(false)}
          >
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="pb-10">
            <TextReveal 
              text="Founded in 2018, Magic Touch Design exists to bridge the gap between architectural logic and human emotion."
              className="font-serif text-3xl md:text-5xl !text-black mb-8"
            />
            <p className="font-sans text-neutral-500 text-lg leading-relaxed max-w-md">
              We specialize in high-end residential and commercial interiors that prioritize tactile experience. From the grain of a wooden floor to the temperature of light, we consider every sense.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-40 bg-black text-white px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <span className="text-brand font-serif italic text-2xl mb-8 block">Our Narrative</span>
            <h2 className="font-serif text-4xl md:text-7xl mb-12">A decade of quiet excellence.</h2>
          </div>
          <div className="flex-1 text-neutral-400 space-y-8 font-light text-lg">
            <p>
              Under the creative direction of Prajyoti Durgapurohit (Degamwar), the studio has grown from a boutique consultancy into a widely recognized design firm. Our approach is defined by "The Magic Touch"—the ability to find the soul of a space and craft it into a physical reality.
            </p>
            <p>
              We avoid trends, preferring the enduring quality of timeless materials and honest craftsmanship. Our projects are not designed to be photographed, but to be lived in.
            </p>
            <div className="flex gap-10 pt-10 border-t border-white/10">
              <div>
                <span className="block text-white text-4xl font-serif mb-2">100+</span>
                <span className="text-xs uppercase tracking-widest">Spaces Crafted</span>
              </div>
              <div>
                <span className="block text-white text-4xl font-serif mb-2">5+</span>
                <span className="text-xs uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Minimal */}
      <section className="py-40 px-8 md:px-20 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-serif text-5xl md:text-8xl">The Collective</h2>
            <ArrowDownRight size={80} className="text-neutral-200 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Prajyoti Durgapurohit (Degamwar)', role: 'Creative Director / Interior Stylist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600' },
              { name: 'Ameya Durgapurohit', role: 'Marketing Head', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600' },
            ].map(member => (
              <div 
                key={member.name} 
                className="group relative overflow-hidden bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700"
                onMouseEnter={() => handleHover(true, 'view')}
                onMouseLeave={() => handleHover(false)}
              >
                <div className="aspect-[3/4]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-6 bg-white flex justify-between items-center">
                  <div>
                    <h3 className="font-serif text-xl">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
