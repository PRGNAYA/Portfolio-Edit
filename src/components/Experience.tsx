import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-navy mb-6">Career</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Editing Journey</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-brand-light last:border-0"
            >
              <div className="text-brand-gray font-bold text-lg">{exp.period}</div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold group-hover:text-brand-navy transition-colors">{exp.role}</h4>
                    <p className="text-brand-gray font-medium">{exp.company}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-brand-gray">
                      <span className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-2 mr-3 shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
