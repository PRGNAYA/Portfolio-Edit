import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-brand-navy mb-6"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Specializing in modern video editing and digital content.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-brand-light hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-light"
            >
              <h4 className="text-xl font-bold mb-8 text-brand-navy">{skill.category}</h4>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-brand-gray font-medium">
                    <span className="w-2 h-2 bg-brand-navy rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
