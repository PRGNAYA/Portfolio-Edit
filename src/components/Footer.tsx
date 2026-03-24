import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-light py-12 border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#home" className="text-2xl font-extrabold tracking-tighter">
            PRG<span className="text-brand-gray">.</span>
          </a>
          
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">About</a>
            <a href="#gallery" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">Gallery</a>
            <a href="#services" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">Services</a>
            <a href="#contact" className="text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors">Contact</a>
          </div>

          <p className="text-sm text-brand-gray font-medium">
            © {new Date().getFullYear()} PRG Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
