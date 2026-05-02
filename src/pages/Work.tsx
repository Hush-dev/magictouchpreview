import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Cursor from '../components/ui/Cursor';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cursorHover, setCursorHover] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-40 px-8 md:px-20 bg-bg min-h-screen">
      <Cursor isHovering={cursorHover} type="view" />

      <header className="mb-20 max-w-4xl">
        <h1 className="font-serif text-6xl md:text-9xl tracking-tighter mb-8">Selected<br />Works</h1>
        <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          A collection of spaces defined by intentionality. From private sanctuaries to public monuments, explore our latest explorations in texture and light.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-16 border-b border-black/10 pb-8">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 relative ${
              activeCategory === cat ? 'text-black' : 'text-neutral-300 hover:text-neutral-500'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand animate-in fade-in slide-in-from-left-1 duration-500" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`project-card group ${idx % 3 === 1 ? 'md:-mt-20' : ''}`}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
          >
            <div className="overflow-hidden aspect-[4/5] bg-neutral-100 flex items-center justify-center">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="project-image-hover w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="mt-8 flex justify-between items-end border-t border-black/5 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">{project.category} / {project.year}</p>
                <h2 className="font-serif text-4xl group-hover:text-brand transition-colors duration-500">{project.title}</h2>
              </div>
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                <span className="text-xl group-hover:text-white transition-colors duration-500">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
