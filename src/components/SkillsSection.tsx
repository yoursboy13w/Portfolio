
import React, { useEffect, useRef } from 'react';
import { setupScrollReveal } from '../utils/animations';

const SkillsSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = setupScrollReveal();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'Machine Learning', level: 85, icon: '🧠' },
    { name: 'React', level: 88, icon: '⚛️' },
    { name: 'Full Stack Development', level: 80, icon: '💻' },
    { name: 'Word Press Custome Theme', level: 75, icon: '📊' },
    { name: 'CyberSec Expert', level: 78, icon: '☁️' },
  ];
  
  // Real code snippet example (not just a simulation)
  const codeSnippet = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam

def train_neural_network(data, epochs=100):
    # Define the model architecture
    model = Sequential([
        Dense(128, activation='relu', input_shape=(data.input_dim,)),
        Dropout(0.2),
        Dense(64, activation='relu'),
        Dense(data.num_classes, activation='softmax')
    ])
    
    # Compile the model
    model.compile(optimizer=Adam(learning_rate=0.001),
                 loss='sparse_categorical_crossentropy',
                 metrics=['accuracy'])
    
    # Train the model
    history = model.fit(
        data.train_x, data.train_y, 
        epochs=epochs,
        batch_size=32,
        validation_data=(data.test_x, data.test_y),
        callbacks=[
            tf.keras.callbacks.EarlyStopping(patience=5),
            tf.keras.callbacks.ModelCheckpoint('best_model.h5', save_best_only=True)
        ]
    )
    return model, history

# Preprocessing function
def preprocess_data(raw_data, test_size=0.2):
    # Normalize the input data
    raw_data.x = raw_data.x / 255.0
    
    # Split the data into training and testing sets
    from sklearn.model_selection import train_test_split
    x_train, x_test, y_train, y_test = train_test_split(
        raw_data.x, raw_data.y, test_size=test_size, random_state=42
    )
    
    return type('Data', (), {
        'train_x': x_train,
        'train_y': y_train,
        'test_x': x_test,
        'test_y': y_test,
        'input_dim': x_train.shape[1],
        'num_classes': len(set(y_train))
    })`;
  
  return (
    <section id="skills" className="py-24 px-6 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyber-blue animate-float"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-cyber-purple animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-cyber-pink animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyber-blue/10 border border-cyber-blue/30">
            <span className="text-xs uppercase tracking-wider text-cyber-blue font-medium">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Cyber Skills Dashboard</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 scroll-reveal">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-semibold mb-8 neon-text">Technical Proficiency</h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 flex items-center justify-center bg-cyber-blue/10 rounded-full text-xl">
                          {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyber-blue font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark/50 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-panel p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 neon-text">Live Code Showcase</h3>
              <p className="text-foreground/70 mb-4">Production-ready ML training code:</p>
              
              <div className="flex-1 overflow-hidden relative bg-black/50 rounded-md font-mono text-sm">
                <div className="absolute inset-0 overflow-auto p-4 text-green-400">
                  <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute top-2 right-2 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-8 flex items-center px-4 bg-black/50 text-xs text-green-400">
                  <div className="animate-pulse">▋</div>
                  <span className="ml-2">python // ml_training.py</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillRing title="AI & ML" percentage={90} colorClass="from-cyber-blue to-cyber-purple" delay={0} />
          <SkillRing title="Web Development" percentage={85} colorClass="from-cyber-pink to-cyber-purple" delay={0.3} />
          <SkillRing title="Cloud & DevOps" percentage={80} colorClass="from-cyber-neon to-cyber-blue" delay={0.6} />
        </div>
      </div>
    </section>
  );
};

interface SkillRingProps {
  title: string;
  percentage: number;
  colorClass: string;
  delay: number;
}

const SkillRing: React.FC<SkillRingProps> = ({ title, percentage, colorClass, delay }) => {
  const dashArray = 2 * Math.PI * 70;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  
  return (
    <div className="scroll-reveal glass-panel p-8 flex flex-col items-center" style={{ transitionDelay: `${delay}s` }}>
      <h4 className="text-xl font-semibold mb-6">{title}</h4>
      
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle 
            cx="100" 
            cy="100" 
            r="70" 
            fill="none" 
            stroke="#0e1229" 
            strokeWidth="12"
          />
          <circle 
            cx="100" 
            cy="100" 
            r="70" 
            fill="none" 
            stroke={`url(#gradient-${title.replace(/\s+/g, '-').toLowerCase()})`} 
            strokeWidth="12" 
            strokeLinecap="round"
            strokeDasharray={dashArray} 
            strokeDashoffset={dashOffset}
            className="animate-pulse-glow"
            transform="rotate(-90 100 100)"
          />
          <defs>
            <linearGradient id={`gradient-${title.replace(/\s+/g, '-').toLowerCase()}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`stop-${colorClass.split(' ')[0]}`} />
              <stop offset="100%" className={`stop-${colorClass.split(' ')[1]}`} />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl font-bold text-white">{percentage}%</span>
            <span className="block text-cyber-blue text-sm mt-1">Proficiency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
