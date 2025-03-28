
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal } from '../utils/animations';

const BlogSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const blogPosts = [
    {
      title: "The Future of AI in Everyday Applications",
      excerpt: "Exploring how artificial intelligence will transform our daily interactions with technology in the coming decade.",
      date: "June 15, 2023",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "5 min read"
    },
    {
      title: "Building Responsive Web Apps with React",
      excerpt: "A comprehensive guide to creating performant and user-friendly web applications using React and modern CSS techniques.",
      date: "August 3, 2023",
      category: "Web Development",
      image: null,
      readTime: "8 min read"
    },
    {
      title: "Machine Learning Model Deployment Strategies",
      excerpt: "Best practices for deploying machine learning models to production environments with scalability and monitoring in mind.",
      date: "October 21, 2023",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      readTime: "10 min read"
    }
  ];
  
  return (
    <section id="blog" className="py-24 px-6 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-cyber-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyber-purple/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">Knowledge Base</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Digital Insights</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Explore my latest thoughts and insights on technology, artificial intelligence, and digital innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="scroll-reveal glass-panel overflow-hidden group transition-all duration-300 hover:cyber-glow"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20">
                    <div className="text-5xl opacity-50">📝</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
                <div className="absolute top-4 left-4 px-2 py-1 rounded bg-cyber-blue/20 border border-cyber-blue/30 text-xs text-cyber-blue">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-foreground/60 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyber-blue transition-colors">{post.title}</h3>
                
                <p className="text-foreground/70 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <button className="text-cyber-blue text-sm font-medium flex items-center space-x-1 group-hover:underline">
                  
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-1">
                    <span className="w-6 h-6 rounded-full bg-cyber-blue/10 flex items-center justify-center text-xs text-cyber-blue cursor-pointer hover:bg-cyber-blue/20">
                      ♥
                    </span>
                    <span className="w-6 h-6 rounded-full bg-cyber-blue/10 flex items-center justify-center text-xs text-cyber-blue cursor-pointer hover:bg-cyber-blue/20">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="cyberpunk-button group">
            <span className="relative z-10">Scroll</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
