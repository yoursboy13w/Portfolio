
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-cyber-blue opacity-20 animate-pulse-glow rounded-full"></div>
              <div className="absolute inset-[2px] bg-cyber-dark rounded-full flex items-center justify-center">
                <span className="text-cyber-blue font-bold">HST</span>
              </div>
            </div>
            <span className="text-xl font-semibold tracking-tight neon-text">
              Himal <span className="text-cyber-purple">Shahi-Thakuri</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "time-tales", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-cyber-blue transition-colors duration-300 glitch-hover uppercase tracking-wider text-sm font-medium"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-full bg-cyber-blue transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute h-0.5 w-full bg-cyber-blue top-3 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-cyber-blue transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
          <div className="glass-panel p-4 flex flex-col space-y-4">
            {["about", "skills", "projects", "time-tales", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-cyber-blue transition-colors duration-300 text-left uppercase tracking-wider text-sm font-medium py-2 border-b border-white/10"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
     
    </header>
  );
};

export default Header;
