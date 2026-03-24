import React from 'react';
import { motion } from 'motion/react';
import { Video, Image, Zap, Globe, Film, Layers } from 'lucide-react';

const SERVICES = [
  {
    icon: <Film className="w-8 h-8" />,
    title: 'Video Editing',
    description: 'Professional cuts, storytelling, and high-energy pacing for YouTube and social media.',
    color: 'brand-orange'
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: 'Thumbnail Design',
    description: 'Eye-catching, high-CTR thumbnails that grab attention and drive clicks.',
    color: 'brand-yellow'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Visual Effects',
    description: 'Cinematic transitions, motion graphics, and advanced effects to elevate your content.',
    color: 'brand-orange'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Color Grading',
    description: 'Professional color correction and grading to give your videos a cinematic look.',
    color: 'brand-yellow'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Short-form Content',
    description: 'Optimized edits for TikTok, Reels, and Shorts to maximize engagement.',
    color: 'brand-orange'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Delivery',
    description: 'Fast turnaround times and high-quality delivery for clients worldwide.',
    color: 'brand-yellow'
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-brand-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-orange"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange">Expertise</h2>
            <div className="w-12 h-[1px] bg-brand-orange"></div>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy"
          >
            My <span className="text-brand-orange">Services</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray max-w-2xl mx-auto"
          >
            Elevating your content with professional precision and creative flair.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 rounded-3xl bg-white border border-brand-light hover:border-brand-orange/20 hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500`}>
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-brand-navy">{service.title}</h4>
              <p className="text-brand-gray leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
