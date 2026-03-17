import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nayyabadnan13@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New Portfolio Message: ${formData.subject}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-brand-light p-8 md:p-12 rounded-3xl"
                >
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="nayyabadnan13@gmail.com"
                          className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                      <input 
                        required
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Project Inquiry"
                        className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell me about your project..."
                        className="w-full px-6 py-4 bg-white rounded-2xl border-transparent focus:border-brand-navy focus:ring-0 transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    
                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>Sending... <Loader2 className="ml-2 w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="ml-2 w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-navy text-white p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center items-center text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">Message Sent!</h4>
                  <p className="text-brand-light/70 mb-8">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
