
import React, { useEffect } from 'react';
import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TimeTalesSection from '../components/TimeTalesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { setupTiltEffect, createGlitchEffect } from '../utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize animations
    setupTiltEffect();
    createGlitchEffect();
    
    // Handle page transitions
    const handlePageLoad = () => {
      document.body.classList.add('page-loaded');
    };
    
    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-foreground overflow-x-hidden">
      <Header />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimeTalesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
