import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import TextReveal from '../components/ui/TextReveal';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.to('.project-hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      const images = gsap.utils.toArray('.gallery-img');
      images.forEach((img: any) => {
        gsap.from(img, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%'
          }
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) return <div className="h-screen flex items-center justify-center font-serif text-4xl">Project Not Found</div>;

  const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

  return (
    <div className="bg-bg min-h-screen">
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="project-hero-img w-full h-full object-cover opacity-60 scale-110"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8 text-center">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-none mb-4">{project.title}</h1>
          <p className="font-sans uppercase tracking-[0.4em] text-xs font-bold text-brand">{project.category} &bull; {project.year}</p>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-6 block">The Brief</span>
            <TextReveal 
              text={project.description}
              className="font-serif text-3xl md:text-5xl leading-tight !text-black"
            />
          </div>
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-10 border-t border-black/10 pt-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-300 block mb-2">Location</span>
                <span className="font-sans font-medium">Global Excellence</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-300 block mb-2">Completion</span>
                <span className="font-sans font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 pb-40">
        <div className="flex flex-col gap-20 md:gap-40">
          {project.images.map((img, idx) => (
            <div 
              key={idx} 
              className={`gallery-img overflow-hidden w-full ${idx % 2 === 1 ? 'md:w-3/4 self-end' : 'md:w-3/4'}`}
            >
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-black text-white px-8 md:px-20 overflow-hidden relative group">
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
          <img src={nextProject.thumbnail} alt="Next" className="w-full h-full object-cover opacity-20 grayscale" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand mb-8">Next Project</span>
          <Link 
            to={`/project/${nextProject.id}`} 
            className="font-serif text-5xl md:text-[8rem] tracking-tighter leading-none hover:text-brand transition-colors duration-500"
          >
            {nextProject.title}
          </Link>
          <Link to="/work" className="mt-20 flex items-center gap-4 font-sans uppercase tracking-widest text-xs font-bold transition-all">
            <ArrowLeft size={16} /> All Work
          </Link>
        </div>
      </section>
    </div>
  );
}
