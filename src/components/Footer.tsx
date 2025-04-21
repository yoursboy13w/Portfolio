import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Update digital clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // ASCII art for the logo
  const asciiLogo = `
  ╔═╗╦ ╦╔╗ ╔═╗╦═╗
  ║  ╚╦╝╠╩╗║╣ ╠╦╝
  ╚═╝ ╩ ╚═╝╚═╝╩╚═
  `;
  
  // Format time in HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  // Navigation links with icons
  const navLinks = [
    { name: "Terminal", icon: "⌨️", href: "#" },
    { name: "Systems", icon: "🖥️", href: "#about" },
    { name: "Skills", icon: "⚡", href: "#skills" },
    { name: "Projects", icon: "🔧", href: "#projects" },
    { name: "Timeline", icon: "⏱️", href: "#time-tales" },
    { name: "Connect", icon: "📡", href: "#contact" }
  ];
  
  return (
    <footer className="relative border-t-2 border-cyan-500 bg-black text-cyan-500 overflow-hidden">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(cyan 1px, transparent 1px), radial-gradient(cyan 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
          transform: `translateY(${scrollPosition * 0.03}px)`
        }}
      />
      
      {/* Animated Data Stream Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-cyan-500 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: 0,
              width: '1px',
              height: '100%',
              transform: `translateY(${scrollPosition * (0.1 + i * 0.05)}px)`,
              animation: `dataStream ${5 + i * 2}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto relative z-10">
        <div className="py-12 px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* ASCII Logo */}
            <div className="flex flex-col items-center md:items-start">
              <pre className="text-xs font-mono mb-4 text-cyan-400">{asciiLogo}</pre>
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"></div>
                <div className="font-mono text-xs">SYSTEM STATUS: ONLINE</div>
              </div>
              <div className="mt-2 text-xs font-mono flex items-center">
                <span className="mr-2">SYS_TIME:</span>
                <span className="text-cyan-300">{formatTime(currentTime)}</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-2 py-1 border-l-2 border-transparent hover:border-cyan-500 pl-2 transition-all duration-300"
                >
                  <span className="opacity-60 group-hover:opacity-100">{link.icon}</span>
                  <span className="font-mono text-sm tracking-wider group-hover:text-cyan-300 transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
            
            {/* Digital Interface Element */}
            <div className="bg-black border border-cyan-800 rounded p-4 font-mono text-xs relative">
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-cyan-300 text-xs">session.log</div>
              </div>
              
              <div className="h-px w-full bg-cyan-800 mb-3"></div>
              
              <div className="space-y-1 text-cyan-300">
                <p><span className="text-green-400">$</span> Connection established</p>
                <p><span className="text-green-400">$</span> Systems operational</p>
                <p><span className="text-green-400">$</span> Running security protocols...</p>
                <p><span className="text-green-400">$</span> <span className="animate-pulse">_</span></p>
              </div>
              
              <div className="absolute bottom-2 right-2 text-xs text-cyan-700">v2.5.7</div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="relative my-8">
            <div className="h-px w-full bg-cyan-900"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-4">
              <div className="h-4 w-4 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                <div className="h-1 w-1 bg-cyan-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["GitHub", "Twitter", "LinkedIn", "Discord"].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-cyan-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-900/30 transition-all duration-300"
                >
                  <span className="text-xs text-cyan-400">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-cyan-600 text-sm">
                <span className="text-cyan-400">© {new Date().getFullYear()}</span> Himal Shahi Thakuri
              </p>
              <p className="text-xs text-cyan-700 mt-1">
                <span className="tracking-widest">ENCRYPTED WITH</span> 
                <span className="text-cyan-400 mx-1">❚❚❚❚</span> 
                <span className="tracking-widest">TECHNOLOGY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600"></div>
      
      {/* Inject the required CSS for animations */}
      <style >{`
        @keyframes dataStream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px cyan; }
          50% { box-shadow: 0 0 20px cyan, 0 0 30px cyan; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;