import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="bg-brand-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://i.ibb.co/cSp0bmGr/gululu.avif" 
                alt="Ivan Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-lg hidden md:block">
              <p className="text-4xl font-bold text-brand-navy">03</p>
              <p className="text-sm text-brand-gray font-medium uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-navy mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              With 3 years of video editing experience, I focus on quality and creativity.
            </h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              I turn raw footage into smooth and professional content. 
              Based in Pakistan, working with creators around the world.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Philosophy</h4>
                <p className="text-sm text-brand-gray">I believe every video has a story to tell. Editing is about timing, emotion, and creativity.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Goal</h4>
                <p className="text-sm text-brand-gray">My goal is to create high-quality edits that help creators stand out. And build long-term collaborations with clients worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
