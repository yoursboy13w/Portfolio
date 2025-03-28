
export function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach((el) => observer.observe(el));
  
  return observer;
}

export function setupTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card');
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      const rotateX = mouseY * -0.05;
      const rotateY = mouseX * 0.05;
      
      (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

export function typeText(element: HTMLElement, text: string, speed = 50): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        resolve();
      }
    }
    typing();
  });
}

export function createGlitchEffect() {
  const glitchElements = document.querySelectorAll('.glitch-hover');
  
  glitchElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('animate-glitch');
    });
    
    el.addEventListener('mouseleave', () => {
      setTimeout(() => {
        el.classList.remove('animate-glitch');
      }, 300);
    });
  });
}

export function generateAISummary(): string {
  // In a real application, this would call an AI API
  const summaries = [
    "A passionate technology enthusiast with expertise in AI, ML, and full-stack development, dedicated to creating innovative digital solutions.",
    "Tech visionary specializing in advanced AI algorithms and responsive web applications, with a focus on ethical technology development.",
    "Versatile developer with a strong foundation in Python, React, and machine learning, committed to building intuitive user experiences.",
    "Digital craftsman blending creative design with technical prowess to develop next-generation applications and intelligent systems.",
    "Forward-thinking technologist exploring the intersection of artificial intelligence and human-centered design principles."
  ];
  
  return summaries[Math.floor(Math.random() * summaries.length)];
}

