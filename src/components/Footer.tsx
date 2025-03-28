
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="border-t border-cyber-blue/20 pt-8 text-center">
          <div className="mb-4">
            <div className="inline-block h-10 w-10 relative">
              <div className="absolute inset-0 bg-cyber-blue opacity-20 animate-pulse-glow rounded-full"></div>
              <div className="absolute inset-[2px] bg-cyber-dark rounded-full flex items-center justify-center">
                <span className="text-cyber-blue font-bold">HS</span>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/60 mb-6">
            Creating digital experiences at the intersection of technology and creativity.
          </p>
          
          <div className="h-px w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-6"></div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {["Home", "About", "Skills", "Projects", "Time Tales", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                className="text-foreground/70 hover:text-cyber-blue transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Himal Shahi Thakuri. All rights reserved.
          </p>
          
          <p className="text-foreground/30 text-xs mt-2">
            Designed & Developed with <span className="text-cyber-pink">♥</span> by Himal Shahi Thakuri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
