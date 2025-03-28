
import React, { useEffect, useRef } from 'react';
import { typeText } from '../utils/animations';
import { ChevronDown } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateText = async () => {
      if (textRef.current && subtitleRef.current) {
        textRef.current.textContent = '';
        subtitleRef.current.textContent = '';
        
        await typeText(textRef.current, "Entering the Futuristic Digital Realm of Himal Shahi Thakuri ", 50);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeText(subtitleRef.current, "AI & ML Enthusiast | Full Stack Developer | CyberSec Expert", 30);
      }
    };
    
    // Small delay to ensure everything is loaded
    setTimeout(animateText, 500);
    
    // Particle effect for mouse
    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement('div');
      particle.className = 'absolute h-1 w-1 rounded-full bg-cyber-blue opacity-80 pointer-events-none z-50';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      document.body.appendChild(particle);
      
      // Animate and remove particle
      setTimeout(() => {
        particle.style.transition = 'all 1s ease-out';
        particle.style.opacity = '0';
        particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px) scale(${Math.random() * 3})`;
        
        setTimeout(() => {
          document.body.removeChild(particle);
        }, 1000);
      }, 10);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cyber-dark">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-neon-glow opacity-40"></div>
      
      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-0 w-full h-px bg-cyber-blue/20 animate-pulse-glow"></div>
        <div className="absolute top-[40%] left-0 w-full h-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="absolute top-0 left-[20%] h-full w-px bg-cyber-blue/20 animate-pulse-glow"></div>
        <div className="absolute top-0 left-[40%] h-full w-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-0 left-[60%] h-full w-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-0 left-[80%] h-full w-px bg-cyber-blue/20 animate-pulse-glow" style={{ animationDelay: '1.7s' }}></div>
      </div>
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyber-blue/5 animate-pulse-glow blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-6 animate-float">
          <div className="inline-block relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1">
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">HS</div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyber-neon animate-pulse-glow"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-cyber-pink animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-white to-cyber-purple">
            <div ref={textRef} className="inline"></div>
            <span className="inline-block animate-blink">|</span>
          </h1>
          <div className="h-px w-full max-w-xl mx-auto bg-gradient-to-r from-transparent via-cyber-blue to-transparent my-6"></div>
          <p className="text-xl md:text-2xl text-foreground/90 font-light">
            <div ref={subtitleRef} className="inline"></div>
            <span className="typing-cursor"></span>
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <button className="cyberpunk-button group">
            <span className="relative z-10">Scroll Down</span>
          </button>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-cyber-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
