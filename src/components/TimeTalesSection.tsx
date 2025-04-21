import React, { useEffect, useRef, useState } from 'react';
import { setupScrollReveal } from '../utils/animations';

const TimeTalesSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    
    // Rotate quotes every 8 seconds
    const quoteInterval = setInterval(() => {
      setActiveQuoteIndex(prev => (prev + 1) % quotes.length);
    }, 8000);
    
    // Terminal typing effect
    if (terminalRef.current) {
      simulateTerminalTyping(terminalRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(glitchInterval);
      clearInterval(quoteInterval);
    };
  }, []);
  
  const simulateTerminalTyping = (element: HTMLDivElement) => {
    const text = `> INITIALIZING TIME_TALES.SYS\n> ACCESSING MAINFRAME\n> DECRYPTING TIMELINE DATA\n> ESTABLISHING SECURE CONNECTION\n> BYPASSING NEURAL FIREWALL\n> ACCESS GRANTED\n> LOADING TIMELINE INTERFACE...`;
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        element.scrollTop = element.scrollHeight;
      } else {
        clearInterval(typing);
      }
    }, 50);
  };
  
  const quotes = [
    "T1m3 is th3 curr3ncy of 3xist3nc3; 1nv3st it w1s3ly in cr34t1ng wh4t m4tt3rs.",
    "Th3 futur3 is cr34t3d by thos3 who br34ch the syst3m and r3wr1te th3 c0de.",
    "1n th3 d1g1t4l und3rgr0und, w3 4r3 th3 4rch1t3cts of t0m0rr0w's r34l1ty-m4tr1x.",
    "1nn0v4t10n h4pp3ns wh3n y0u h4ck th3 1nt3rs3ct10n of p0ss1b1l1ty and n3c3ss1ty."
  ];
  
  const timelineEvents = [
    {
      year: '2022',
      title: 'System Infiltration',
      description: 'Acquired root access to collective digital consciousness network. Established command nodes in Ward 4 subgrid and SPM central node.'
    },
    {
      year: '2023',
      title: 'Neural Network Deployment',
      description: 'Initiated quantum-resistant protocol for decentralized sports data distribution. Deployed self-propagating mesh network for regional athletic enhancement.'
    },
    {
      year: '2023',
      title: 'NeuroTech Expansion',
      description: 'Unlocked advanced cryptographic algorithms for AI consciousness evolution. Integrated quantum computing capabilities with augmented reality visualization systems.'
    },
    {
      year: '2024',
      title: 'Reality Manipulation Protocol',
      description: 'Developed 5D space-time visualization algorithms. Engineered gravitational anomaly simulators and relativistic time dilation prediction software.'
    },
    {
      year: '2024',
      title: 'Digital Consciousness Upload',
      description: 'Achieved 97.3% neural pattern recognition efficiency. Deployed memetic content vectors across global information networks to manipulate collective societal algorithms.'
    }
  ];

  return (
    <section id="time-tales" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated digital noise background */}
      <div className="absolute inset-0 bg-[url('/digital-noise.png')] opacity-20"></div>
      
      {/* Binary code rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="matrix-code-rain"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-15"></div>
      
      {/* Digital circuit traces */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-20">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="#00ff00" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="2" fill="#00ff00" />
            <circle cx="90" cy="90" r="2" fill="#00ff00" />
            <path d="M10 50 H40 V30 H70 V50 H90" fill="none" stroke="#00ffff" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      {/* Animated particle field */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyber-blue animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className={`mb-16 text-center ${glitchActive ? 'glitch-effect' : ''}`}>
          <div className="inline-block px-3 py-1 mb-4 cyberpunk-border bg-black/50 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-cyber-green font-mono glitch-text">SYSTEM:ACTIVE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 cyber-glitch-text relative">
            <span className="absolute inset-0 text-cyber-pink opacity-50 animate-glitch-1">TIME_TALES</span>
            <span className="absolute inset-0 text-cyber-blue opacity-50 animate-glitch-2">TIME_TALES</span>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-pink">TIME_TALES</span>
          </h2>
          
          <div className="h-1 w-40 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-pink animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink via-cyber-blue to-cyber-green animate-pulse-reverse opacity-50"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <div className="cyberpunk-terminal-container">
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn terminal-close"></span>
                  <span className="terminal-btn terminal-minimize"></span>
                  <span className="terminal-btn terminal-maximize"></span>
                </div>
                <div className="terminal-title">time_tales.exe</div>
                <div className="terminal-controls">
                  <span className="terminal-icon">⚙️</span>
                </div>
              </div>
              
              {/* Terminal body */}
              <div className="terminal-body">
                <div className="terminal-output" ref={terminalRef}></div>
                
                {/* 3D holographic pyramid */}
                <div className="holographic-container">
                  <div className="holographic-pyramid">
                    <div className="pyramid-face pyramid-front"></div>
                    <div className="pyramid-face pyramid-right"></div>
                    <div className="pyramid-face pyramid-back"></div>
                    <div className="pyramid-face pyramid-left"></div>
                    <div className="pyramid-face pyramid-bottom"></div>
                  </div>
                  <div className="holographic-base"></div>
                  <div className="holographic-scan"></div>
                </div>
                
                <div className="terminal-input-line">
                  <span className="terminal-prompt">root@time_tales:~$</span>
                  <span className="terminal-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="neo-cyberpunk-panel">
              <div className="panel-header">
                <div className="panel-header-text">NEURAL::INTERFACE</div>
                <div className="panel-header-lights">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="header-light" style={{ animationDelay: `${i * 0.5}s` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="panel-content">
                <h3 className="text-2xl font-bold mb-6 cyber-text-glow">The Quantum Dimension</h3>
                
                <div className="cyber-text mb-8">
                  <p className="text-lg leading-relaxed">
                    TIME_TALES represents the neural interface between quantum computing and human consciousness. 
                    It's not merely a brand—it's an algorithmic philosophy that rewrites the underlying code of reality 
                    to synthesize technological singularity with human experience vectors.
                  </p>
                </div>
                
                <div className="digital-quote-container mb-8">
                  <div className="quote-header">
                    <div className="quote-indicator"></div>
                    <h4 className="text-cyber-green font-mono">QUANTUM::THOUGHT_MATRIX</h4>
                  </div>
                  
                  <div className="quote-body">
                    <blockquote className="cyber-quote text-lg">
                      <span className="quote-text">{quotes[activeQuoteIndex]}</span>
                      <span className="quote-cursor">|</span>
                    </blockquote>
                  </div>
                  
                  <div className="quote-footer">
                    <div className="data-stream">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <span key={i} className="data-bit" style={{ animationDelay: `${i * 0.05}s` }}></span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="neo-cyberpunk-button">
                  <div className="button-glitch-effect"></div>
                  <span className="button-text">DECRYPT_TIMELINE</span>
                  <div className="button-border-glow"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black cyber-text-glow">NEURAL::TIMELINE</h3>
            <div className="cyber-subtitle">SYSTEM CHRONOLOGICAL INFILTRATION SEQUENCE</div>
          </div>
          
          <div className="relative timeline-container">
            {/* Main timeline line with digital pulse effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-black">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-green via-cyber-blue to-cyber-pink"></div>
              <div className="timeline-pulse"></div>
            </div>
            
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 pb-8 md:pb-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div 
                      className={`scroll-reveal neo-cyberpunk-card ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} 
                      style={{ maxWidth: '450px', transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-header">
                        <div className="year-badge">{event.year}</div>
                        <div className="card-circuit-trace"></div>
                      </div>
                      
                      <div className="card-content">
                        <h4 className="text-xl font-bold mb-3 cyber-text-glow">{event.title}</h4>
                        <p className="text-cyber-blue-300">{event.description}</p>
                      </div>
                      
                      <div className="card-footer">
                        <div className="data-visualization">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div 
                              key={i} 
                              className="data-bar" 
                              style={{ 
                                height: `${20 + Math.random() * 80}%`,
                                animationDelay: `${i * 0.1}s` 
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="timeline-node">
                      <div className="node-outer"></div>
                      <div className="node-inner"></div>
                      <div className="node-pulse"></div>
                    </div>
                    <div className="node-connection"></div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for the additional cyberpunk elements */}
      <style >{`
        /* Matrix code rain effect */
        .matrix-code-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/matrix-code.png');
          background-size: cover;
          opacity: 0.15;
          animation: scrollDown 20s linear infinite;
        }
        
        @keyframes scrollDown {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }
        
        /* Glitch text effects */
        .glitch-text {
          position: relative;
          animation: textGlitch 3s infinite;
        }
        
        @keyframes textGlitch {
          0% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75); }
          14% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75); }
          15% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
          49% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
          50% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
          99% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75); }
        }
        
        /* Cyberpunk Terminal */
        .cyberpunk-terminal-container {
          background: #000;
          border: 1px solid #00ff00;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.2);
          overflow: hidden;
        }
        
        .terminal-header {
          background: linear-gradient(90deg, #151515 0%, #252525 100%);
          padding: 10px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #00ff00;
        }
        
        .terminal-buttons {
          display: flex;
          gap: 8px;
        }
        
        .terminal-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .terminal-close { background-color: #ff5f56; }
        .terminal-minimize { background-color: #ffbd2e; }
        .terminal-maximize { background-color: #27c93f; }
        
        .terminal-title {
          color: #00ff00;
          font-family: monospace;
          font-size: 14px;
        }
        
        .terminal-body {
          background: #0c0c0c;
          padding: 20px;
          min-height: 300px;
          font-family: monospace;
          font-size: 14px;
          color: #00ff00;
          position: relative;
        }
        
        .terminal-output {
          white-space: pre-wrap;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        
        .terminal-input-line {
          display: flex;
          align-items: center;
        }
        
        .terminal-prompt {
          color: #00ff00;
          margin-right: 8px;
        }
        
        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: #00ff00;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Holographic Pyramid */
        .holographic-container {
          position: relative;
          width: 120px;
          height: 150px;
          margin: 20px auto;
          perspective: 600px;
        }
        
        .holographic-pyramid {
          position: absolute;
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
          animation: rotate 10s infinite linear;
        }
        
        @keyframes rotate {
          from { transform: rotateY(0) rotateX(20deg); }
          to { transform: rotateY(360deg) rotateX(20deg); }
        }
        
        .pyramid-face {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0.7;
          border-style: solid;
        }
        
        .pyramid-front {
          border-width: 0 50px 86.6px 50px;
          border-color: transparent transparent #00ffff transparent;
          transform: translateZ(28.87px) rotateX(-30deg);
        }
        
        .pyramid-right {
          border-width: 0 50px 86.6px 50px;
          border-color: transparent transparent #00ff00 transparent;
          transform: rotateY(90deg) translateZ(50px) rotateX(-30deg);
        }
        
        .pyramid-back {
          border-width: 0 50px 86.6px 50px;
          border-color: transparent transparent #ff00ff transparent;
          transform: rotateY(180deg) translateZ(28.87px) rotateX(-30deg);
        }
        
        .pyramid-left {
          border-width: 0 50px 86.6px 50px;
          border-color: transparent transparent #ffff00 transparent;
          transform: rotateY(-90deg) translateZ(50px) rotateX(-30deg);
        }
        
        .pyramid-bottom {
          width: 100px;
          height: 100px;
          background: #0088ff;
          transform: rotateX(90deg) translateZ(-50px);
        }
        
        .holographic-base {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 100px;
          height: 20px;
          background: radial-gradient(ellipse at center, rgba(0,255,255,0.5) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          animation: pulse 2s infinite alternate;
        }
        
        .holographic-scan {
          position: absolute;
          top: 0;
          left: 10px;
          width: 100px;
          height: 120px;
          background: linear-gradient(to bottom, rgba(0,255,255,0) 0%, rgba(0,255,255,0.2) 50%, rgba(0,255,255,0) 100%);
          animation: scan 3s infinite linear;
        }
        
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        
        @keyframes pulse {
          from { opacity: 0.4; transform: scale(0.9); }
          to { opacity: 0.8; transform: scale(1.1); }
        }
        
        /* Neo Cyberpunk Panel */
        .neo-cyberpunk-panel {
          background: #0a0a0a;
          border: 1px solid #00ffff;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 10px rgba(0, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }
        
        .panel-header {
          background: linear-gradient(90deg, #0a0a0a 0%, #141414 100%);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #00ffff;
        }
        
        .panel-header-text {
          color: #00ffff;
          font-family: monospace;
          font-weight: bold;
          letter-spacing: 2px;
          text-shadow: 0 0 5px #00ffff;
        }
        
        .panel-header-lights {
          display: flex;
          gap: 8px;
        }
        
        .header-light {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #00ffff;
          box-shadow: 0 0 5px #00ffff;
          animation: blink-random 3s infinite;
        }
        
        @keyframes blink-random {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.3; }
          50% { opacity: 0.7; }
          75% { opacity: 0.5; }
        }
        
        .panel-content {
          padding: 20px;
          position: relative;
        }
        
        .cyber-text {
          color: #e0e0e0;
          position: relative;
          z-index: 2;
        }
        
        .cyber-text-glow {
          color: #00ffff;
          text-shadow: 0 0 5px #00ffff, 0 0 10px rgba(0, 255, 255, 0.5);
        }
        
        /* Digital Quote Container */
        .digital-quote-container {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #00aaff;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .quote-header {
          background: linear-gradient(90deg, #00aaff 0%, #0044ff 100%);
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .quote-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #00ff00;
          box-shadow: 0 0 5px #00ff00;
          animation: blink 1s infinite;
        }
        
        .quote-body {
          padding: 16px;
          background: rgba(0, 40, 80, 0.2);
        }
        
        .cyber-quote {
          color: #00ffff;
          font-family: monospace;
          letter-spacing: 1px;
          line-height: 1.6;
        }
        
        .quote-cursor {
          display: inline-block;
          color: #00ffff;
          animation: blink 0.8s infinite;
        }
        
        .quote-footer {
          padding: 8px;
          background: rgba(0, 0, 0, 0.3);
        }
        
        .data-stream {
          display: flex;
          gap: 3px;
          height: 8px;
        }
        
        .data-bit {
          flex: 1;
          height: 100%;
          background-color: #0088ff;
          animation: data-flow 1.5s infinite linear;
        }
        
        @keyframes data-flow {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        
        /* Neo Cyberpunk Button */
        .neo-cyberpunk-button {
          position: relative;
          background: linear-gradient(90deg, #000 0%, #111 100%);
          border: none;
          color: #00ffff;
          font-family: monospace;
          font-weight: bold;
          letter-spacing: 2px;
          padding: 12px 24px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .button-text {
          position: relative;
          z-index: 3;
        }
        
        .button-glitch-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .button-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid #00ffff;
          box-shadow: 0 0 5px #00ffff, inset 0 0 5px #00ffff;
          opacity: 0.5;
        }
        
        .neo-cyberpunk-button:hover .button-border-glow {
          opacity: 1;
          box-shadow: 0 0 15px #00ffff, inset 0 0 10px #00ffff;
        }
        
        .neo-cyberpunk-button:hover .button-glitch-effect {
          opacity: 1;
          animation: button-glitch 0.3s infinite;
        }
        
        @keyframes button-glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-5px, -5px); }
          80% { transform: translate(5px, 5px); }
          100% { transform: translate(0); }
        }
        
    /* Timeline Styling (Continued) */
        .timeline-container {
          margin-top: 60px;
          position: relative;
          padding: 20px 0;
        }
        
        .timeline-pulse {
          position: absolute;
          width: 100%;
          height: 20px;
          background: linear-gradient(to bottom, rgba(0,255,0,0) 0%, rgba(0,255,0,0.8) 50%, rgba(0,255,0,0) 100%);
          animation: timeline-scan 4s infinite linear;
        }
        
        @keyframes timeline-scan {
          from { transform: translateY(0); }
          to { transform: translateY(100%); }
        }
        
        .timeline-node {
          position: relative;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .node-outer {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid #00ffff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
          animation: node-pulse 3s infinite alternate;
        }
        
        .node-inner {
          width: 14px;
          height: 14px;
          background: #00ffff;
          border-radius: 50%;
          box-shadow: 0 0 8px #00ffff, inset 0 0 4px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
        
        .node-pulse {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.2);
          animation: pulse-out 2s infinite;
        }
        
        @keyframes pulse-out {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        .node-connection {
          position: absolute;
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #00ffff 0%, rgba(0, 255, 255, 0) 100%);
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
        }
        
        .neo-cyberpunk-card {
          background: rgba(5, 10, 15, 0.8);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
          backdrop-filter: blur(4px);
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .neo-cyberpunk-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #00ff00, #0088ff, #00ffff, #0088ff, #00ff00);
          background-size: 200% 100%;
          animation: gradient-move 2s linear infinite;
        }
        
        @keyframes gradient-move {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        
        .card-header {
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 255, 255, 0.2);
          position: relative;
        }
        
        .year-badge {
          background: linear-gradient(90deg, #00ff00, #00aaff);
          color: #000;
          font-family: monospace;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 14px;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          letter-spacing: 1px;
        }
        
        .card-circuit-trace {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 16px;
          width: 30%;
          overflow: hidden;
        }
        
        .card-circuit-trace::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 100%;
          height: 1px;
          background: #00ffff;
          box-shadow: 0 0 5px #00ffff;
        }
        
        .card-circuit-trace::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 8px;
          height: 8px;
          background: #00ffff;
          border-radius: 50%;
          transform: translate(4px, -50%);
          box-shadow: 0 0 10px #00ffff;
          animation: trace-pulse 2s infinite alternate;
        }
        
        @keyframes trace-pulse {
          from { opacity: 0.5; box-shadow: 0 0 5px #00ffff; }
          to { opacity: 1; box-shadow: 0 0 15px #00ffff; }
        }
        
        .card-content {
          padding: 16px;
          position: relative;
          z-index: 2;
        }
        
        .card-footer {
          padding: 12px 16px;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
          background: rgba(0, 20, 40, 0.2);
        }
        
        .data-visualization {
          display: flex;
          gap: 5px;
          height: 40px;
          align-items: flex-end;
        }
        
        .data-bar {
          flex: 1;
          background: linear-gradient(to top, #0088ff, #00ffff);
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
          animation: data-equalizer 2s infinite alternate;
        }
        
        @keyframes data-equalizer {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; height: 50%; }
        }
        
        .neo-cyberpunk-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 25px rgba(0, 255, 255, 0.3);
        }
        
        .neo-cyberpunk-card:hover .data-bar {
          animation: data-equalizer-active 0.5s infinite alternate;
        }
        
        @keyframes data-equalizer-active {
          0% { transform: scaleY(0.8); }
          100% { transform: scaleY(1.1); }
        }
        
        /* Cyberpunk background enhancement */
        .cyber-subtitle {
          color: #00aaff;
          font-family: monospace;
          font-size: 14px;
          letter-spacing: 2px;
          opacity: 0.8;
          margin-top: 8px;
          text-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
        }
        
        /* Custom border for cyberpunk UI */
        .cyberpunk-border {
          position: relative;
          border: 1px solid #00ff00;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }
        
        .cyberpunk-border::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 10px;
          width: 20px;
          height: 3px;
          background: #00ff00;
          box-shadow: 0 0 5px #00ff00;
        }
        
        .cyberpunk-border::after {
          content: '';
          position: absolute;
          bottom: -3px;
          right: 10px;
          width: 20px;
          height: 3px;
          background: #00ff00;
          box-shadow: 0 0 5px #00ff00;
        }
        
        /* Additional animated effects */
        @keyframes glitch-1 {
          0% { transform: none; opacity: 1; }
          7% { transform: skew(-0.5deg, -0.9deg); opacity: 0.75; }
          10% { transform: none; opacity: 1; }
          27% { transform: none; opacity: 1; }
          30% { transform: skew(0.8deg, -0.1deg); opacity: 0.75; }
          35% { transform: none; opacity: 1; }
          52% { transform: none; opacity: 1; }
          55% { transform: skew(-1deg, 0.2deg); opacity: 0.75; }
          50% { transform: none; opacity: 1; }
          72% { transform: none; opacity: 1; }
          75% { transform: skew(0.4deg, 1deg); opacity: 0.75; }
          80% { transform: none; opacity: 1; }
          100% { transform: none; opacity: 1; }
        }
        
        @keyframes glitch-2 {
          0% { transform: none; opacity: 0.25; }
          7% { transform: translate(-2px, -3px); opacity: 0.5; }
          10% { transform: none; opacity: 0.25; }
          27% { transform: none; opacity: 0.25; }
          30% { transform: translate(-5px, -2px); opacity: 0.5; }
          35% { transform: none; opacity: 0.25; }
          52% { transform: none; opacity: 0.25; }
          55% { transform: translate(-5px, -1px); opacity: 0.5; }
          50% { transform: none; opacity: 0.25; }
          72% { transform: none; opacity: 0.25; }
          75% { transform: translate(-2px, -6px); opacity: 0.5; }
          80% { transform: none; opacity: 0.25; }
          100% { transform: none; opacity: 0.25; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        
      `}</style>
      
      {/* Additional Cyberpunk Elements Overlay */}
      <div className="cyberpunk-overlay">
        {/* Radar Animation */}
        <div className="radar-container">
          <div className="radar-sweep"></div>
          <div className="radar-grid"></div>
          <div className="radar-blips">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="radar-blip" 
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Digital Monitoring Elements */}
        <div className="monitoring-hud">
          <div className="hud-section">
            <div className="hud-label">NEURAL SYNC</div>
            <div className="hud-value">97.3%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '97.3%' }}></div>
            </div>
          </div>
          
          <div className="hud-section">
            <div className="hud-label">ENCRYPTION</div>
            <div className="hud-value">ACTIVE</div>
            <div className="hud-status active"></div>
          </div>
          
          <div className="hud-section">
            <div className="hud-label">TIMELINE NODES</div>
            <div className="hud-value">5/5</div>
            <div className="node-indicators">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="node-indicator active"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Digital Circuit Elements */}
        <svg className="circuit-overlay" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,50 H200 L230,80 H400 L430,50 H600" 
            fill="none" 
            stroke="#00ffaa" 
            strokeWidth="1" 
            opacity="0.3"
          />
          <path 
            d="M100,0 V150 L130,180 V300" 
            fill="none" 
            stroke="#00aaff" 
            strokeWidth="1" 
            opacity="0.3" 
            transform="translate(800, 0)"
          />
          <circle cx="230" cy="80" r="4" fill="#00ffaa" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="50" r="4" fill="#00ffaa" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="930" cy="180" r="4" fill="#00aaff" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      {/* Additional style for overlay elements */}
      <style >{`
        .cyberpunk-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
          overflow: hidden;
        }
        
        /* Radar Animation */
        .radar-container {
          position: absolute;
          bottom: 30px;
          right: 30px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0, 20, 40, 0.3);
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
          overflow: hidden;
        }
        
        .radar-sweep {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          clip-path: polygon(50% 50%, 50% 0%, 100% 0%);
          background: linear-gradient(90deg, rgba(0, 255, 255, 0) 0%, rgba(0, 255, 255, 0.2) 100%);
          animation: radar-rotate 4s infinite linear;
          transform-origin: center;
        }
        
        @keyframes radar-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .radar-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        
        .radar-grid::before, .radar-grid::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: rgba(0, 255, 255, 0.3);
          transform: translateX(-50%);
        }
        
        .radar-grid::after {
          transform: translateX(-50%) rotate(90deg);
        }
        
        .radar-blips {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .radar-blip {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #00ffff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ffff;
          animation: blip-pulse 2s infinite alternate;
        }
        
        @keyframes blip-pulse {
          from { transform: scale(0.5); opacity: 0.3; }
          to { transform: scale(1.2); opacity: 0.8; }
        }
        
        /* Digital Monitoring HUD */
        .monitoring-hud {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 200px;
          background: rgba(0, 10, 20, 0.5);
          border: 1px solid rgba(0, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          padding: 15px;
        }
        
        .hud-section {
          margin-bottom: 15px;
        }
        
        .hud-label {
          font-family: monospace;
          font-size: 10px;
          color: #00aaff;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        
        .hud-value {
          font-family: monospace;
          font-size: 14px;
          color: #00ffff;
          letter-spacing: 1px;
          margin-bottom: 5px;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
        }
        
        .progress-bar {
          height: 4px;
          width: 100%;
          background: rgba(0, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ffff 0%, #0088ff 100%);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
          animation: progress-glow 2s infinite alternate;
        }
        
        @keyframes progress-glow {
          from { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
          to { box-shadow: 0 0 15px rgba(0, 255, 255, 0.8); }
        }
        
        .hud-status {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-left: 10px;
        }
        
        .hud-status.active {
          background: #00ff00;
          box-shadow: 0 0 10px #00ff00;
          animation: status-pulse 1s infinite alternate;
        }
        
        @keyframes status-pulse {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        
        .node-indicators {
          display: flex;
          gap: 5px;
          margin-top: 5px;
        }
        
        .node-indicator {
          width: 8px;
          height: 8px;
          background: rgba(0, 255, 255, 0.2);
          border: 1px solid rgba(0, 255, 255, 0.5);
        }
        
        .node-indicator.active {
          background: #00ffff;
          box-shadow: 0 0 5px #00ffff;
        }
        
        /* Circuit overlay */
        .circuit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
          pointer-events: none;
        }
        
        /* Scanlines effect */
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.1) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 10;
          opacity: 0.15;
        }
      `}</style>
    </section>
  );
};

export default TimeTalesSection;