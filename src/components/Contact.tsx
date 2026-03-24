import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, Loader2, CheckCircle2, Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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

              <a 
                href="https://wa.me/923334987391" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
                  <WhatsAppIcon />
                </div>
                <span className="text-xl font-bold">03334987391</span>
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
