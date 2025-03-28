
import React, { useEffect, useRef, useState } from 'react';
import { setupScrollReveal, generateAISummary } from '../utils/animations';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const handleGenerateAISummary = () => {
    const summary = generateAISummary();
    setAiSummary(summary);
  };
  
  const timelineEvents = [
    {
      year: '2018',
      title: 'Started Tech Journey',
      description: 'Began exploring programming and technology fundamentals.'
    },
    {
      year: '2020',
      title: 'Full Stack Development',
      description: 'Mastered modern web technologies and frameworks.'
    },
    {
      year: '2021',
      title: 'AI & ML Focus',
      description: 'Shifted focus to artificial intelligence and machine learning.'
    },
    {
      year: '2022',
      title: 'Time Tales Founded',
      description: 'Created innovative solutions with cutting-edge technology.'
    },
    {
      year: '2023',
      title: 'Advanced AI Projects',
      description: 'Developed sophisticated AI-powered applications.'
    }
  ];
  
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-cyber-gradient">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">The Neural Network of My Journey</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <div className="glass-panel p-8 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyber-blue"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <Avatar className="w-32 h-32 border-2 border-cyber-blue/30 p-1 cyber-glow ">
                  <AvatarImage    className="rounded-full"  src="https://himalshahithakuri.com.np/assets/himal.jpg" alt="Himal Shahi Thakuri" />
                  <AvatarFallback className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">HS</AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2 neon-text">Himal Shahi Thakuri</h3>
                  <p className="text-foreground/80 mb-2">AI & ML Enthusiast | Full Stack Developer | CyberSec Expert</p>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyber-blue/20 text-cyber-blue">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-cyber-purple/20 text-cyber-purple">React</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-cyber-pink/20 text-cyber-pink">ML</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-white">
  I'm <span className="text-cyan-400 font-semibold">Himal Shahi Thakuri</span>, a passionate tech enthusiast specializing in 
  <span className="text-green-400 font-semibold"> AI, ML, and Full-Stack Development</span>. My journey began with a curiosity about how 
  <span className="text-purple-400 font-semibold">technology</span> could reshape our world, leading me to explore diverse domains within the 
  <span className="text-yellow-400 font-semibold">digital landscape</span>.
</p>

<p className="text-lg leading-relaxed mb-6 text-white">
  With expertise in both <span className="text-red-400 font-semibold">frontend</span> and <span className="text-red-400 font-semibold">backend</span> technologies, I create 
  <span className="text-blue-400 font-semibold"> seamless, responsive, and intuitive</span> interfaces. My focus has expanded to 
  <span className="text-green-400 font-semibold"> AI and Machine Learning</span>, where I develop <span className="text-purple-400 font-semibold">intelligent solutions</span> 
  that adapt and evolve.
</p>

<p className="text-lg leading-relaxed text-white">
  As a <span className="text-orange-400 font-semibold">Cyber Futurist</span>, I'm constantly exploring the intersection of 
  <span className="text-indigo-400 font-semibold">emerging technologies</span> and their potential to transform industries. 
  I believe in creating technology that is not just functional but also 
  <span className="text-green-400 font-semibold"> ethical</span>, 
  <span className="text-cyan-400 font-semibold">accessible</span>, and 
  <span className="text-red-400 font-semibold">futuristic</span>.
</p>


              
              {aiSummary && (
                <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/30 rounded-md">
                  <h4 className="text-cyber-blue font-semibold mb-2">AI-Generated Summary:</h4>
                  <p className="italic text-foreground/90">{aiSummary}</p>
                </div>
              )}
              
              <button 
                onClick={handleGenerateAISummary}
                className="mt-8 bg-cyber-blue/10 hover:bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Generate AI Summary</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-panel p-8 relative">
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyber-blue to-cyber-purple"></div>
              
              <h3 className="text-2xl font-semibold mb-8 neon-text">Experience Timeline</h3>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyber-blue glow-effect"></div>
                    <div className="absolute left-2 top-4 h-full w-px bg-cyber-blue/30"></div>
                    <div className="mb-1 text-cyber-blue font-mono text-sm">{event.year}</div>
                    <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                    <p className="text-foreground/80">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
