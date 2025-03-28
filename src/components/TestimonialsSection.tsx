
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal, setupTiltEffect } from '../utils/animations';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    setupTiltEffect();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const testimonials = [
   



    {
      name: "Aashish Bhusal",
      role: "Software Engineer",
      avatar: null,
      content: "Himal's technical acumen and leadership in projects have consistently delivered outstanding results, making him an invaluable asset to any team.",
    },
    {
      name: "Aayush Khanal",
      role: "Data Scientist",
      avatar: null,
      content: "Working with Himal on machine learning projects has been a fantastic experience. His innovative approaches and practical problem-solving abilities are commendable.",
    },
    {
      name: "Sijan Paudel",
      role: "UX Designer",
      avatar: null,
      content: "Himal's ability to bridge the gap between design and development is exceptional. He always ensures a seamless and user-centric experience in every project.",
    },
    {
      name: "Bibek Bhusal",
      role: "Web Developer",
      avatar: null,
      content: "Himal's proficiency in web technologies and his dedication to creating responsive, visually appealing websites is truly inspiring.",
    },
    {
      name: "Hari Pathak",
      role: "Tech Entrepreneur",
      avatar: null,
      content: "Himal's entrepreneurial spirit and technical expertise have helped shape the success of several innovative tech solutions, especially in AI and web development.",
    },
    {
      name: "Shahswot Adkahakri",
      role: "Digital Marketing Specialist",
      avatar: null,
      content: "Himal's ability to integrate technology with marketing strategies has been a game-changer for us, resulting in higher engagement and improved online visibility.",
    },




    {
      name: "Paras Bahandari",
      role: "Frontend Developer",
      avatar: null,
      content: "Himal’s ability to collaborate across teams and deliver efficient solutions with his technical skills makes him stand out as an excellent leader in the tech space.",
    },
    {
      name: "Keshav Koirala",
      role: "Backend Developer",
      avatar: null,
      content: "Himal's deep understanding of backend technologies has helped us build scalable and secure systems, making a real impact on our product development.",
    },
    {
      name: "Ujwal Kandel",
      role: "Full Stack Developer",
      avatar: null,
      content: "Working alongside Himal was incredibly rewarding. His technical expertise and problem-solving skills ensured that we met our project goals successfully.",
    },





  ];
  
  return (
    <section id="testimonials" className="py-24 px-6 bg-cyber-gradient relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Circuit lines */}
      <div className="absolute left-10 top-0 w-1 h-full bg-cyber-blue/20 animate-pulse-glow"></div>
      <div className="absolute right-10 top-0 w-1 h-full bg-cyber-purple/20 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">Client Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Testimonial Network</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="scroll-reveal tilt-card glass-panel p-8 relative overflow-hidden"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyber-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-cyber-purple/10 rounded-full blur-xl"></div>
              
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 24H16L12 36H20L24 24V8H8V24Z" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" strokeWidth="2" />
                    <path d="M24 24H32L28 36H36L40 24V8H24V24Z" fill="rgba(255, 0, 255, 0.2)" stroke="#ff00ff" strokeWidth="2" />
                  </svg>
                </div>
                
                <p className="flex-1 text-foreground/90 italic mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    {testimonial.avatar ? (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <AvatarFallback className="bg-cyber-blue/20 text-cyber-blue">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
