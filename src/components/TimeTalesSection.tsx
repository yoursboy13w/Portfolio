
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal } from '../utils/animations';

const TimeTalesSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const quotes = [
    "Time is the currency of existence; invest it wisely in creating what matters.",
    "The future is created by those who blend imagination with technology.",
    "In the digital age, we are the architects of tomorrow's reality.",
    "Innovation happens at the intersection of possibility and necessity."
  ];
  
  const timelineEvents = [
    {
      year: '2022',
      title: 'Leadership & Growth',
      description: 'Became the General Secretary of the Student Union Nepal at SPM College and President of the Youth Club in Ward Number 4, Gaindakot.'
    },
    {
      year: '2023',
      title: 'Sports Website Development',
      description: 'Started working on the sport website to promote and develop sports activities in the region.'
    },
    {
      year: '2023',
      title: 'Tech Services & AI',
      description: 'Expanded into tech services, including web development, AI, and machine learning, while also offering graphic design and content creation.'
    },
    {
      year: '2024',
      title: 'Advanced Projects & Innovation',
      description: 'Worked on futuristic space exploration visualizations, solar system animations, and a professional portfolio featuring 3D neon coding animations.'
    },
    {
      year: '2024',
      title: 'Digital Content & Growth',
      description: 'Started creating viral content on Instagram and YouTube, showcasing amazing cities, tech, and drone footage.'
    }
];

  
  return (
    <section id="time-tales" className="py-24 px-6 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Animated constellation background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-cyber-blue animate-pulse-glow"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full bg-cyber-purple animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-cyber-pink animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-3/4 w-1 h-1 rounded-full bg-cyber-blue animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 rounded-full bg-cyber-neon animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">My Brand</span>
          </div>
          <h2 className="text-4xl md:text-3xl font-bold mb-6 neon-text">Time Tales</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                {/* 3D Pyramid Animation */}
                <div className="absolute inset-2 flex items-center justify-center">
                  <div className="w-48 h-59 animate-rotate-slow">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <polygon 
                        points="50,10 10,90 90,90" 
                        fill="none" 
                        stroke="url(#pyramidGradient)" 
                        strokeWidth="1"
                        className="animate-pulse-glow"
                      />
                      <defs>
                        <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00F0FF" />
                          <stop offset="100%" stopColor="#BD00FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-glow"></div>
                
                {/* Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
                      TT
                    </div>
                    <div className="mt-2 text-xs text-cyber-blue uppercase tracking-widest">Time Tales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text">The Brand Dimension</h3>
              
              <p className="text-lg leading-relaxed mb-8">
                Time Tales represents the fusion of cutting-edge technology with timeless principles. It's more than a brand—it's a philosophy that guides the creation of innovative solutions that respect both technological advancement and human experience.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">AI-Generated Quote</h4>
                <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg">
                  <blockquote className="text-lg italic text-foreground/90">
                    "{quotes[Math.floor(Math.random() * quotes.length)]}"
                  </blockquote>
                </div>
                
                <button className="mt-4 flex items-center space-x-2 text-cyber-blue hover:text-cyber-neon transition-colors duration-300">
                  <span> Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <polyline points="23 20 23 14 17 14"></polyline>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                  </svg>
                </button>
              </div>
              
              <button className="cyberpunk-button">
                <span className="relative z-10"> TIME TALES</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-center neon-text">Brand Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue to-cyber-purple"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 pb-8 md:pb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`scroll-reveal glass-panel p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '400px', transitionDelay: `${index * 0.1}s` }}>
                      <div className="text-cyber-blue font-mono mb-2">{event.year}</div>
                      <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                      <p className="text-foreground/80">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 h-6 w-6 rounded-full bg-cyber-dark border-2 border-cyber-blue glow-effect"></div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeTalesSection;
