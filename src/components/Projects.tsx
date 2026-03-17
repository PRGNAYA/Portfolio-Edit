import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-brand-light">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-navy mb-6">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured Work</h3>
          </div>
          <p className="text-brand-gray font-medium">A selection of my best work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="text-brand-navy" />
                  </motion.div>
                </div>
              </div>
              <p className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold group-hover:text-brand-navy transition-colors">{project.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md hover:bg-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X />
                </button>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-4">{selectedProject.category}</p>
                    <h2 className="text-4xl font-bold mb-6">{selectedProject.title}</h2>
                    <p className="text-lg text-brand-gray mb-8 leading-relaxed">{selectedProject.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold mb-4">Results</h4>
                      <p className="text-brand-gray">{selectedProject.results}</p>
                    </div>
                  </div>
                  <div className="md:w-64">
                    <h4 className="font-bold mb-4">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-4 py-2 bg-brand-light rounded-full text-sm font-medium">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
