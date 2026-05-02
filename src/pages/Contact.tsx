import React from 'react';
import { Mail, Instagram, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function Contact() {
  const { setCursorType, setIsHovering } = useCursor();
  
  const handleHover = (isHovering: boolean, type: 'default' | 'view' = 'default') => {
    setIsHovering(isHovering);
    setCursorType(type);
  };

  return (
    <div className="bg-bg min-h-screen pt-40 px-8 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-none mb-12">Say<br /><span className="italic text-brand">Hello.</span></h1>
          
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Email Us</span>
              <a 
                href="mailto:magictouchdesign@gmail.com" 
                className="font-serif text-2xl md:text-4xl hover:text-brand transition-colors"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                magictouchdesign@gmail.com
              </a>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Phone</span>
              <a 
                href="tel:+918390351213" 
                className="font-serif text-2xl md:text-4xl hover:text-brand transition-colors"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                +91 83903 51213
              </a>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Visit Our Studio</span>
              <p className="font-serif text-2xl md:text-4xl">Durgapurohit House, Samadhi Ward<br />Chandrapur, Maharashtra</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Follow</span>
              <div className="flex gap-8 mt-4">
                <a 
                  href="https://www.instagram.com/magic_touch_design/" 
                  className="hover:text-brand transition-colors"
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                >
                  <Instagram size={32} />
                </a>
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
            
            <button 
              className="group relative w-full py-6 bg-black text-white font-sans uppercase tracking-[0.3em] text-xs font-bold overflow-hidden flex items-center justify-center gap-4"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <span className="relative z-10 transition-transform group-hover:translate-x-2">Send Message</span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-4" />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="text-left w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter italic">Find our <span className="text-brand">Studio</span></h2>
          </div>
          <p className="hidden md:block max-w-md text-neutral-500 font-sans text-sm leading-relaxed mb-1">
            Located in the heart of Chandrapur, our studio is a space for creativity and collaboration. 
            Feel free to visit us by appointment.
          </p>
        </div>
        
        <div 
          className="w-full h-[500px] grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-1000 border border-black/5 overflow-hidden"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4113208048484!2d79.29926777468651!3d19.949197023981572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d43026b2b3af%3A0x3155f3c96541ab7d!2sMagic%20Touch%20Design%20%7C%20Architect%20%26%20Interior%20Designer%20%7C%20Best%20Interior%20Designer%20In%20Chandrapur!5e0!3m2!1sen!2sin!4v1777745268175!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio Location"
          />
        </div>
      </div>
    </div>
  );
}
