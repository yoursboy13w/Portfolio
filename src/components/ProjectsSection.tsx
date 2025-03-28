
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal, setupTiltEffect } from '../utils/animations';

const ProjectsSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    setTimeout(() => {
      setupTiltEffect();
    }, 1000);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  



  const projects = [
    {
      title: 'Parba Events',
      description: 'A full-stack event management website with advanced SEO, AI-powered backend, and LLM integration.',
      tags: ['Full-Stack Dev', 'AI', 'SEO'],
      image: 'https://i.pinimg.com/736x/8b/58/0a/8b580a4eb8fa34e6e1bd0047129b2529.jpg'
    },
    {
      title: 'Sports Analytics AI',
      description: 'AI-driven sports analytics platform providing real-time insights, performance metrics, and predictive analysis.',
      tags: ['AI', 'Sports Analytics', 'Data Science'],
      image: 'https://i.pinimg.com/474x/f7/6d/2c/f76d2ca237f17ca4e1b05e7dda254c3d.jpg'
    },
    {
      title: 'Digital CRM System',
      description: 'A next-gen digital CRM platform for managing customer interactions, sales, and business automation with AI integration.',
      tags: ['CRM', 'AI', 'Business Automation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800'
    },
    {
      title: 'CyberGuard Network Security',
      description: 'ML-powered network cybersecurity system that detects and prevents threats, ensuring secure data transmission.',
      tags: ['Cybersecurity', 'ML', 'Network Security'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800'
    },
    {
      title: 'AI-Powered FinTech Dashboard',
      description: 'A financial technology platform integrating AI for predictive market analysis, fraud detection, and investment insights.',
      tags: ['FinTech', 'AI', 'Finance'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800'
    }
  ];
  
  
  return (
    <section id="projects" className="py-24 px-6 bg-cyber-gradient relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">3D Interactive Showroom</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="group tilt-card glass-panel h-full">
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-60 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 rounded-full bg-cyber-blue/20 backdrop-blur-sm text-xs text-cyber-blue">
                      Project #{index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 rounded-full bg-cyber-blue/10 text-xs text-cyber-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="cyberpunk-button text-sm px-4 py-2">
                      <span className="relative z-10">1</span>
                    </button>
                    
                    <button className="px-4 py-2 bg-cyber-dark border border-cyber-blue/30 text-cyber-blue text-sm rounded flex items-center space-x-2 hover:bg-cyber-blue/10 transition-colors duration-300">
                      <span></span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-tl-2xl rounded-br-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="cyberpunk-button">
            <span className="relative z-10">Scroll</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
