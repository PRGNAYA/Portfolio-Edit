import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-navy mb-6">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let's create something <span className="text-brand-gray">amazing together.</span>
            </h3>
            <p className="text-xl text-brand-gray mb-12 max-w-md">
              Have a project in mind? Or just want to say hi? Feel free to reach out.
            </p>
            
            <div className="space-y-8">
              <a 
                href="mailto:nayyabadnan13@gmail.com" 
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">nayyabadnan13@gmail.com</span>
              </a>

              <div className="flex items-center space-x-6">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: '#' },
                  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                  { icon: <Github className="w-5 h-5" />, href: '#' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-light p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
