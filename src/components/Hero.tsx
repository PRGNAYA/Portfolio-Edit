import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Dribbble, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Turning <span className="text-brand-gray">ordinary footage</span> into eye-catching edits. <span className="text-brand-navy">Precision cuts, creative effects, and smooth flow.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-gray max-w-2xl mb-12 leading-relaxed">
            Pakistan-based video editor working with clients worldwide.
            Clean cuts, smooth transitions, and engaging storytelling.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="#contact" className="btn-primary">
              Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-navy transition-colors">Instagram</a>
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-navy transition-colors">FACEBOOK</a>
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-navy transition-colors">YOUTUBE</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl"
        >
          <img 
            src="https://i.ibb.co/yFk5Yc6J/Salt-deposits-Dead-Sea-Israel-Masada.webp" 
            alt="Portfolio Preview" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
