import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code, Shield, Cpu, Globe, Zap, Terminal } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  const typeTextWithGlitch = async (element: HTMLElement, text: string, speed: number = 50) => {
    element.textContent = '';
    const characters = text.split('');
    for (let i = 0; i < characters.length; i++) {
      const shouldGlitch = Math.random() < 0.1;
      if (shouldGlitch) {
        const originalChar = characters[i];
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,./<>?`~1234567890'.split('');
        const glitchCount = Math.floor(Math.random() * 3) + 3;
        for (let g = 0; g < glitchCount; g++) {
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          element.textContent = element.textContent + randomChar;
          await new Promise(resolve => setTimeout(resolve, speed / 4));
          element.textContent = element.textContent.slice(0, -1);
        }
      }
      element.textContent += characters[i];
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      if (canvas && ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const matrix = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const characters = matrix.split("");
    const drops: number[] = [];
    for (let i = 0; i < canvas.width / 20; i++) {
      drops[i] = Math.random() * -100;
    }
    const drawMatrix = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0fa";
      ctx.font = "18px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    const matrixInterval = setInterval(drawMatrix, 50);
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const animateText = async () => {
      if (textRef.current && subtitleRef.current) {
        textRef.current.textContent = '';
        subtitleRef.current.textContent = '';
        await typeTextWithGlitch(textRef.current, "Entering the Neural Network of Himal Shahi Thakuri", 40);
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeTextWithGlitch(subtitleRef.current, "Cybersecurity Enthusiast  | Kali Linux | AI/ML Developer", 25);
      }
    };
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 5000 + 3000);
    setTimeout(animateText, 800);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 1.5 + 0.5;
        const colors = ['#0ff', '#f0f', '#ff0', '#0fa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.className = 'absolute rounded-full pointer-events-none z-50';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        document.body.appendChild(particle);
        setTimeout(() => {
          particle.style.transition = `all ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`;
          particle.style.opacity = '0';
          particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(${Math.random() + 0.5})`;
          setTimeout(() => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle);
            }
          }, duration * 1000);
        }, 10);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * 10;
      const rotateY = (0.5 - x) * 10;
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      container.style.transition = 'transform 0.5s ease';
    };
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const techIcons = [
    { icon: <Code className="h-6 w-6" />, name: "code", desc: "Full Stack Developer" },
    { icon: <Shield className="h-6 w-6" />, name: "shield", desc: "CyberSec Specialist" },
    { icon: <Cpu className="h-6 w-6" />, name: "cpu", desc: "AI & ML Engineer" },
    { icon: <Globe className="h-6 w-6" />, name: "globe", desc: "Digital Networker" },
    { icon: <Terminal className="h-6 w-6" />, name: "terminal", desc: "Command Line Wizard" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30"></canvas>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 cyber-scan-effect"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 animate-pulse-slow blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 animate-pulse-slower blur-3xl"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>
            <div 
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse-glow" 
              style={{ 
                top: `${(i + 1) * 10}%`, 
                left: 0, 
                width: '100%', 
                animationDelay: `${i * 0.2}s`,
                filter: 'drop-shadow(0 0 5px #0ff)'
              }}
            ></div>
          </React.Fragment>
        ))}
      </div>
      <div ref={containerRef} className="z-10 relative p-4 text-center">
        <div ref={textRef} className={`text-3xl md:text-5xl font-bold mb-2 ${isGlitching ? 'animate-glitch' : ''}`}></div>
        <div ref={subtitleRef} className="text-base md:text-xl text-gray-400"></div>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          {techIcons.map(({ icon, name, desc }) => (
            <div 
              key={name} 
              onMouseEnter={() => setHoverIcon(name)} 
              onMouseLeave={() => setHoverIcon(null)}
              className="flex flex-col items-center gap-2 cursor-pointer transform transition hover:scale-110"
            >
              <div className="bg-gray-800 p-3 rounded-full shadow-md">
                {icon}
              </div>
              <span className="text-sm text-gray-300">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
