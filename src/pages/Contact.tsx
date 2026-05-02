import React from 'react';
import { Mail, Instagram, Linkedin, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-bg min-h-screen pt-40 px-8 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-none mb-12">Say<br /><span className="italic text-brand">Hello.</span></h1>
          
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Email Us</span>
              <a href="mailto:studio@magictouch.design" className="font-serif text-2xl md:text-4xl hover:text-brand transition-colors">studio@magictouch.design</a>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Visit Our Studio</span>
              <p className="font-serif text-2xl md:text-4xl">52 Berkeley Square, Mayfair<br />London W1J 5AS</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Follow</span>
              <div className="flex gap-8 mt-4">
                <a href="#" className="hover:text-brand transition-colors"><Instagram size={32} /></a>
                <a href="#" className="hover:text-brand transition-colors"><Linkedin size={32} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 p-8 md:p-16 border border-black/5">
          <h2 className="font-serif text-3xl mb-12">Project Inquiry</h2>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300"
              />
            </div>
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300"
              />
            </div>
            <div className="group relative">
              <select className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg text-neutral-400 appearance-none">
                <option value="">Interested in...</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Space</option>
                <option value="consultation">Creative Consultation</option>
              </select>
            </div>
            <div className="group relative">
              <textarea 
                placeholder="Tell us about your space" 
                rows={4}
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300 resize-none"
              />
            </div>
            
            <button className="group relative w-full py-6 bg-black text-white font-sans uppercase tracking-[0.3em] text-xs font-bold overflow-hidden flex items-center justify-center gap-4">
              <span className="relative z-10 transition-transform group-hover:translate-x-2">Send Message</span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-4" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
