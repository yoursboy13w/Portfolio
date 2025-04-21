import React, { useEffect, useRef, useState } from 'react';
import { setupScrollReveal } from '../utils/animations';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  status?: 'typing' | 'sent' | 'received';
}

const ContactSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'm Himal's neural assistant. How can I help you today?",
      timestamp: new Date(),
      status: 'received'
    }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom of chatbox when new message is added
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

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

  const aiResponses = {
    greetings: [
      "Hello! How can I assist you with Himal's services today?",
      "Welcome! I'm Himal's AI assistant. What brings you here?",
      "Hi there! Looking for digital solutions? I can help guide you."
    ],
    projects: [
      "Himal specializes in cybersecurity solutions, web development, and AI integration. Would you like to know more about a specific area?",
      "Recent projects include secure payment gateways, ML-based data analysis tools, and corporate website redesigns. Which sounds most relevant to your needs?"
    ],
    skills: [
      "Himal is proficient in React, Node.js, Python, cybersecurity protocols, and AI development. What specific skill are you interested in?",
      "Expertise includes frontend development, backend architecture, data security, and AI integration. Need details on any of these?"
    ],
    contact: [
      "You can reach Himal directly through this form, or connect on LinkedIn for professional inquiries. Would you like me to prioritize your message?",
      "Himal typically responds within 24 hours, but I can flag your message as urgent if needed. Would you like that?"
    ],
    default: [
      "I'm analyzing your request. Could you provide more details so I can better assist you?",
      "Interesting question. Let me process that. Could you elaborate a bit more?",
      "I'd be happy to help with that. Would you like me to connect you directly with Himal for this specific request?"
    ]
  };

  const generateAIResponse = (input: string): string => {
    const inputLower = input.toLowerCase();
    
    if (inputLower.includes('hello') || inputLower.includes('hi') || inputLower.includes('hey')) {
      return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    } else if (inputLower.includes('project') || inputLower.includes('work') || inputLower.includes('portfolio')) {
      return aiResponses.projects[Math.floor(Math.random() * aiResponses.projects.length)];
    } else if (inputLower.includes('skill') || inputLower.includes('experience') || inputLower.includes('know')) {
      return aiResponses.skills[Math.floor(Math.random() * aiResponses.skills.length)];
    } else if (inputLower.includes('contact') || inputLower.includes('reach') || inputLower.includes('email')) {
      return aiResponses.contact[Math.floor(Math.random() * aiResponses.contact.length)];
    } else {
      return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsTyping(true);
    
    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiResponse = generateAIResponse(userInput);
      const newAIMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date(),
        status: 'received'
      };
      
      setMessages(prev => [...prev, newAIMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'floatParticle infinite linear'
            }}
          />
        ))}
      </div>
      
      {/* Radial glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyber-blue/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">Neural Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">AI-Enhanced Communication</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <div className="glass-panel p-8 h-full relative group">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-6 border-b border-cyber-blue/30 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-2xl font-mono font-semibold neon-text">MESSAGE.SYS</h3>
                <div className="text-cyber-blue text-xs font-mono">v2.5.7</div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute top-0 left-0 ml-3 mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 pl-10 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground"
                      placeholder="Enter your name"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cyber-blue/50">IDENTITY SCAN</div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-0 left-0 ml-3 mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 pl-10 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground"
                      placeholder="Enter your email"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cyber-blue/50">ENCRYPTED</div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-0 left-0 ml-3 mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 pl-10 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                    <div className="absolute right-3 top-3 text-xs text-cyber-blue/50">ANALYZING</div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full cyberpunk-button group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">TRANSMIT MESSAGE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </span>
                </button>
              </form>
              
              {/* Animated corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-blue"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-blue"></div>
            </div>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-panel p-8 h-full flex flex-col relative group">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-6 border-b border-cyber-blue/30 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-2xl font-mono font-semibold neon-text">NEURAL.NET</h3>
                <div className="text-cyber-blue text-xs font-mono">ONLINE</div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">
                    <span className="text-cyber-pink">&lt;</span>
                    <span className="text-cyber-blue">AI</span>
                    <span className="text-cyber-pink">&gt;</span>
                    <span> Neural Assistant</span>
                  </h4>
                  <button 
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="px-3 py-1 text-xs uppercase border border-cyber-blue/50 rounded hover:bg-cyber-blue/20 transition-all duration-300"
                  >
                    {showChatbot ? 'Minimize' : 'Expand'}
                  </button>
                </div>
                
                {showChatbot ? (
                  <div className="transition-all duration-300 ease-in-out">
                    <div 
                      ref={chatboxRef}
                      className="p-4 bg-cyber-dark/80 border border-cyber-blue/20 rounded-lg mb-4 h-64 overflow-y-auto hide-scrollbar"
                    >
                      {messages.map((message) => (
                        <div key={message.id} className={`flex items-start space-x-3 mb-4 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                          {message.sender === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="4"></circle>
                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                              </svg>
                            </div>
                          )}
                          
                          <div className={`max-w-[75%] ${message.sender === 'user' ? 'ml-auto' : ''}`}>
                            <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-cyber-blue/20 rounded-br-none' : 'bg-cyber-dark/80 border border-cyber-blue/30 rounded-bl-none'}`}>
                              <p className="text-sm">{message.text}</p>
                            </div>
                            <div className={`text-xs text-cyber-blue/50 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                              {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              {message.sender === 'user' && (
                                <span className="ml-2">
                                  {message.status === 'sent' && '✓'}
                                  {message.status === 'received' && '✓✓'}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {message.sender === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="4"></circle>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="bg-cyber-dark/80 border border-cyber-blue/30 p-3 rounded-lg rounded-bl-none">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" style={{animationDelay: '0.4s'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <form onSubmit={sendMessage} className="relative">
                      <input 
                        type="text" 
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="w-full px-4 py-3 bg-cyber-blue/5 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 text-foreground pr-12"
                        placeholder="Ask me anything..."
                      />
                      <button 
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-blue hover:text-cyber-purple transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </button>
                    </form>
                  </div>
                ) : (
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
                          <p className="text-sm">Hello! I'm Himal's neural assistant. Click 'Expand' to chat with me.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">Network Nodes</span>
                  <div className="h-1 w-1 rounded-full bg-cyber-blue animate-pulse"></div>
                </h4>
                <div className="flex space-x-4">
                  <SocialButton icon="tiktok" />
                  <SocialButton icon="youtube" />
                  <SocialButton icon="linkedin" />
                  <SocialButton icon="instagram" />
                </div>
              </div>
              
              {/* Animated corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-blue"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-blue"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-blue"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed chat button for mobile */}
      <div className="lg:hidden fixed right-4 bottom-4 z-50">
        <button 
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 rounded-full bg-cyber-blue flex items-center justify-center shadow-lg shadow-cyber-blue/20 hover:bg-cyber-pink transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
      
      {/* Add the animations */}
      <style >{`
        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
          100% { transform: translate(0, 0); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(.25,.46,.45,.94) both;
        }
      `}</style>
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
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-cyber-blue flex items-center justify-center glow-effect hover:bg-cyber-blue/20 transition-colors duration-300 group relative"
    >
      <div className="absolute inset-0 rounded-full bg-cyber-blue/0 group-hover:bg-cyber-blue/10 transition-all duration-500"></div>
      <div className="absolute inset-0 rounded-full border border-cyber-blue/0 group-hover:border-cyber-blue/30 group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
      
      {icon === 'tiktok' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12A4 4 0 1 0 9 4 4 4 0 0 0 9 12z"></path>
          <path d="M7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2"></path>
        </svg>
      )}

      {icon === 'youtube' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )}

      {icon === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}

      {icon === 'instagram' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-blue group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )}
      
      <div className="absolute -inset-1 rounded-full border border-cyan-500/0 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm"></div>
    </a>
  );
};

export default ContactSection;