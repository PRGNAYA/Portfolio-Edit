import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-light">
              <img 
                src="https://i.ibb.co/cSp0bmGr/gululu.avif" 
                alt="Portrait" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-brand-orange p-10 rounded-3xl shadow-2xl hidden md:block border-4 border-white">
              <p className="text-6xl font-bold text-white leading-none">03</p>
              <p className="text-xs text-white/80 font-bold uppercase tracking-widest mt-2">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-orange"></div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange">About Me</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-brand-navy">
              Crafting Digital <br />
              <span className="text-brand-orange">Experiences.</span>
            </h3>
            
            <p className="text-lg text-brand-gray mb-12 leading-relaxed">
              I don't just edit videos; I engineer experiences. Based in Pakistan, 
              I've spent the last 3 years refining the art of visual storytelling 
              for a global roster of creators and brands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-brand-navy">The Philosophy</h4>
                <p className="text-sm text-brand-gray leading-relaxed">Every frame is a canvas. I believe in the power of timing, subverting expectations, and creating an emotional resonance that lingers.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-brand-navy">The Mission</h4>
                <p className="text-sm text-brand-gray leading-relaxed">To elevate your content from the noise. My goal is to forge long-term creative partnerships that push the boundaries of what's possible.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
