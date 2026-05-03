import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, MapPin, ArrowRight, Facebook, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from '../context/CursorContext';

export default function Contact() {
  const { setCursorType, setIsHovering } = useCursor();
  const [status, setStatus] = useState<"" | "SUCCESS" | "ERROR">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHover = (hovering: boolean, type: 'default' | 'view' = 'default') => {
    setIsHovering(hovering);
    setCursorType(type);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xzdodvdj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen pt-40 px-8 md:px-20 pb-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* LEFT SIDE (UNCHANGED) */}
        <div className="flex-1">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-none mb-12">
            Say<br /><span className="italic text-brand">Hello.</span>
          </h1>
          
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
              <p className="font-serif text-2xl md:text-4xl">
                Durgapurohit House, Samadhi Ward<br />Chandrapur, Maharashtra
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Follow</span>
              <div className="flex gap-8 mt-4">
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/magic_touch_design/" 
                  className="hover:text-brand transition-colors"
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                >
                  <Instagram size={32} />
                </a>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/magictouchdesign/" 
                  className="hover:text-brand transition-colors"
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                >
                  <Facebook size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SIDE (UPDATED) */}
        <div className="flex-1 bg-neutral-50 p-8 md:p-16 border border-brand">
          <h2 className="font-serif text-3xl mb-12">Project Inquiry</h2>

          <form className="space-y-10" onSubmit={handleSubmit}>
            
            {/* Anti-spam */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="group relative">
              <input 
                name="name"
                type="text" 
                placeholder="Name" 
                required
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300"
              />
            </div>

            <div className="group relative">
              <input 
                name="phone"
                type="tel" 
                placeholder="Phone Number" 
                required
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300"
              />
            </div>

            <div className="group relative">
              <input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                required
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300"
              />
            </div>

            <div className="group relative">
              <select 
                name="service"
                required
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg text-neutral-400 appearance-none"
              >
                <option value="">Interested in...</option>
                <option value="Residential Design">Residential Design</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Creative Consultation">Creative Consultation</option>
              </select>
            </div>

            <div className="group relative">
              <textarea 
                name="message"
                placeholder="Tell us about your space" 
                rows={4}
                required
                className="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-brand transition-colors font-sans text-lg placeholder:text-neutral-300 resize-none"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-6 bg-black text-white font-sans uppercase tracking-[0.3em] text-xs font-bold overflow-hidden flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <span className="relative z-10 transition-transform group-hover:translate-x-2 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
                {!isSubmitting && <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-4" />}
                <div className="absolute inset-x-0 bottom-0 top-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>

            {/* STATUS NOTIFICATIONS */}
            <AnimatePresence mode="wait">
              {status === "SUCCESS" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-4 p-6 bg-green-50 border border-green-100 rounded-sm mt-4"
                >
                  <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <p className="text-green-800 text-sm font-medium">
                    Message sent successfully. We'll get back to you soon.
                  </p>
                </motion.div>
              )}
              {status === "ERROR" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-4 p-6 bg-red-50 border border-red-100 rounded-sm mt-4"
                >
                  <AlertCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                  <p className="text-red-800 text-sm font-medium">
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* MAP SECTION (UNCHANGED) */}
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="text-left w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold block mb-4">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter italic">
              Find our <span className="text-brand">Studio</span>
            </h2>
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
