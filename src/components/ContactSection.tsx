
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal } from '../utils/animations';


const ContactSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add glitch effect to the whole section
    const section = document.getElementById('contact');
    if (section) {
      section.classList.add('animate-glitch');
      setTimeout(() => {
        section.classList.remove('animate-glitch');
      }, 500);
    }
    
    // In a real app, handle form submission here
    console.log('Form submitted');
  };
  
  return (
    <section id="contact" className="py-24 px-6 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Radial glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">AI-Enhanced Networking</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Message Me</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full cyberpunk-button group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span>SEND MESSAGE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-panel p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 neon-text">Connect With Me</h3>
              
              <p className="text-lg leading-relaxed mb-8">
                Have a project idea or just want to chat? Feel free to reach out through the form or connect with me on social media. I'm always interested in discussing new technologies, projects, and opportunities.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">AI Chatbot</h4>
                <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg mb-4">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="bg-cyber-dark/50 p-3 rounded-lg">
                        <p className="text-sm">Hello! I'm Himal's AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground pr-12"
                    placeholder="Ask the AI assistant..."
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue hover:text-cyber-neon transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-xl font-semibold mb-4">Social Connections</h4>
                <div className="flex space-x-4">
                  <SocialButton icon="tiktok" />
                  <SocialButton icon="youtube" />
                  <SocialButton icon="linkedin" />
                  <SocialButton icon="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon }) => {
  const getSocialLink = (icon: string) => {
    switch (icon) {
      case 'tiktok':
        return 'https://www.tiktok.com/@everesthimal5?_t=ZS-8v3PV8iTTZC&_r=1';
      case 'youtube':
        return 'https://www.youtube.com/@bilvora';
      case 'linkedin':
        return 'https://www.linkedin.com/in/himal-techoffical?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
      case 'instagram':
        return 'https://www.instagram.com/himal.shahi.thakuri?igsh=bmJ3b3pyd2lsanJ5&utm_source=qr';
      default:
        return '#';
    }
  };

  return (
    <a 
      href={getSocialLink(icon)} 
      className="w-12 h-12 rounded-full border border-cyber-blue flex items-center justify-center glow-effect hover:bg-cyber-blue/20 transition-colors duration-300"
    >
      {icon === 'tiktok' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.69 2 6 4.69 6 8c0 2.39 1.61 4.4 3.88 4.89V18h2v-5.11c1.83-.5 3.12-2.1 3.12-4.01 0-2.21-1.79-4-4-4zM9 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-.45z"/>
        </svg>
      )}

      {icon === 'youtube' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42C22.49 5.6 22.08 4.98 21.31 4.92 19.27 4.78 12 4.78 12 4.78S4.73 4.78 2.69 4.92C1.92 4.98 1.51 5.6 1.46 6.42 1.32 8.95 1.32 12 1.32 12s0 3.05.14 5.58c.05.82.36 1.44 1.14 1.49 2.04.14 9.27.14 9.27.14s7.23 0 9.27-.14c.78-.05 1.09-.67 1.14-1.49.14-2.53.14-5.58.14-5.58s0-3.05-.14-5.58zM9.75 15V9l5.25 3-5.25 3z"/>
        </svg>
      )}

      {icon === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}

      {icon === 'instagram' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )}
    </a>
  );
};




export default ContactSection;
