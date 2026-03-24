import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Dribbble, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">Available for new projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-8 text-brand-navy">
            Visual <span className="text-brand-orange">Storytelling</span> <br />
            for the Digital Age.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-gray max-w-xl mb-12 leading-relaxed">
            Pakistan-based video editor & thumbnail designer. 
            Crafting high-impact visuals for creators worldwide with 
            <span className="text-brand-navy font-semibold"> precision and creativity</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="#contact" className="btn-primary group">
              Start a Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-brand-navy hover:text-brand-orange transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-brand-navy hover:text-brand-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-brand-navy hover:text-brand-orange transition-colors"><Dribbble className="w-5 h-5" /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl border border-brand-light group"
        >
          <img 
            src="https://i.ibb.co/yFk5Yc6J/Salt-deposits-Dead-Sea-Israel-Masada.webp" 
            alt="Portfolio Preview" 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
