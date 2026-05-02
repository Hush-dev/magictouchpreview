import React from 'react';
import { ArrowRight, MoveUpRight, Zap, Layers, Sparkles, PencilRuler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';

const SERVICES = [
  {
    title: 'Architectural Consultation',
    desc: 'Spatial planning and structural narratives that define the foundation of your project.',
    icon: <Layers className="w-10 h-10" />,
    items: ['Master Planning', '3D Visualization', 'Material Specification']
  },
  {
    title: 'Interior Curation',
    desc: 'The art of the tactile. We select materials, furniture, and lighting that resonate.',
    icon: <Sparkles className="w-10 h-10" />,
    items: ['Bespoke Furniture', 'Textile Selection', 'Lighting Design']
  },
  {
    title: 'Art Liaison',
    desc: 'We bridge the gap between architecture and fine art, curating collections that belong.',
    icon: <PencilRuler className="w-10 h-10" />,
    items: ['Sourcing unique pieces', 'Site-specific installation', 'Curation']
  },
  {
    title: 'Total Turnkey',
    desc: 'A seamless journey from initial concept to the final, finished space.',
    icon: <Zap className="w-10 h-10" />,
    items: ['Project Management', 'Vendor Negotiation', 'Styling']
  }
];

const PROCESS = [
  { num: '01', title: 'Consultation', desc: 'Understanding your rhythm and spatial needs.' },
  { num: '02', title: 'Narrative', desc: 'Crafting the mood boards and material stories.' },
  { num: '03', title: 'Fabrication', desc: 'Precision building and sourcing.' },
  { num: '04', title: 'The Touch', desc: 'The final layering of soul into the space.' }
];

export default function Services() {
  const { setCursorType, setIsHovering } = useCursor();
  
  const handleHover = (isHovering: boolean, type: 'default' | 'view' = 'default') => {
    setIsHovering(isHovering);
    setCursorType(type);
  };

  return (
    <div className="bg-bg min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-8 md:px-20">
        <h1 className="font-serif text-6xl md:text-9xl tracking-tighter mb-12">Services &<br />Approach</h1>
        <div className="w-full h-[1px] bg-black/10 mb-20" />
      </section>

      {/* Services Grid */}
      <section className="px-8 md:px-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {SERVICES.map((s, idx) => (
            <div 
              key={idx} 
              className="flex flex-col group"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <div className="text-brand mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 w-fit">
                {s.icon}
              </div>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">{s.title}</h2>
              <p className="text-neutral-500 text-lg mb-8 max-w-md">{s.desc}</p>
              <ul className="space-y-4">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-sm tracking-widest uppercase font-bold text-neutral-400 group-hover:text-black transition-colors">
                    <div className="w-1 h-1 bg-brand rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 bg-black text-white px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div>
            <span className="text-brand font-serif italic text-xl mb-4 block">The Methodology</span>
            <h2 className="font-serif text-4xl md:text-7xl">From void to soul.</h2>
          </div>
          <p className="text-neutral-400 max-w-md">Our process is rigorous yet flexible, ensuring that the final outcome feels organic and effortless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {PROCESS.map(p => (
            <div 
              key={p.num} 
              className="border-t border-white/10 pt-8 group hover:border-brand transition-colors duration-500"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <span className="font-serif text-brand text-4xl mb-4 block group-hover:-translate-y-2 transition-transform duration-500">{p.num}</span>
              <h3 className="font-serif text-2xl mb-4">{p.title}</h3>
              <p className="text-neutral-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-8">
        <h2 className="font-serif text-4xl md:text-7xl mb-12">Ready to transform?</h2>
        <Link 
          to="/contact" 
          className="group relative inline-flex items-center gap-6 py-6 px-12 bg-brand text-white font-sans uppercase tracking-[0.3em] text-xs font-bold overflow-hidden"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <span className="relative z-10">Start Your Story</span>
          <MoveUpRight className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Link>
      </section>
    </div>
  );
}

