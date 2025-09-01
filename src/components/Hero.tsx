import React from 'react';
import { Download, Github, Mail, ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-900 via-surface-900 to-void-900">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-neon-500 to-transparent animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                height: '200px',
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-500/5 to-transparent animate-hologram" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Holographic Profile */}
          <div className="mb-12 relative">
            <div className="w-40 h-40 mx-auto relative">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 animate-spin opacity-75" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-electric-500 via-neon-500 to-cyber-500 animate-spin opacity-50" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              
              {/* Profile Container */}
              <div className="absolute inset-4 rounded-full bg-void-900 border-2 border-neon-500/50 flex items-center justify-center animate-cyber-pulse">
                <span className="text-4xl font-bold bg-gradient-to-r from-neon-400 to-cyber-400 bg-clip-text text-transparent">
                  PS
                </span>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-3 h-3 text-void-900" />
              </div>
            </div>
          </div>

          {/* Main Title with Cyber Effects */}
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="block text-white font-cyber tracking-wider">
                PRAVEEN
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-400 via-cyber-400 to-electric-400 animate-glow font-cyber tracking-widest">
                SARAWAGI
              </span>
            </h1>
            
            {/* Glitch Effect Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-500 to-transparent opacity-30 animate-pulse" />
              <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Subtitle with Typing Effect */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-neon-400 mb-2 font-matrix">
              &gt; ML_ENGINEER.initialize()
            </p>
            <p className="text-lg md:text-xl text-cyber-300 font-light">
              Building AI-Powered Solutions for Tomorrow
            </p>
          </div>

          {/* Status Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neon-400 font-matrix">STATUS:</span>
                <span className="text-cyber-400 animate-pulse">● AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-neon-400 font-matrix">FOCUS:</span>
                <span className="text-electric-400">3rd Year B.Tech CSE (AIML)</span>
              </div>
            </div>
          </div>

          {/* Futuristic Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-500 to-cyber-500 text-void-900 font-bold rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="font-matrix">&gt;</span>
                EXPLORE_PROJECTS()
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-500 to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-neon-500/50 text-neon-400 font-bold rounded-xl hover:bg-neon-500/10 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 font-matrix">
                <Download className="w-5 h-5" />
                DOWNLOAD_RESUME.pdf
              </span>
              <div className="absolute inset-0 bg-neon-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 border-2 border-electric-500/50 text-electric-400 font-bold rounded-xl hover:bg-electric-500/10 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 font-matrix">
                <Mail className="w-5 h-5" />
                INITIATE_CONTACT()
              </span>
              <div className="absolute inset-0 bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Social Matrix */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="#" 
              className="group relative w-12 h-12 bg-void-800/50 border border-neon-500/30 rounded-xl flex items-center justify-center hover:border-neon-500 transition-all duration-300 hover:shadow-lg hover:shadow-neon-500/30"
            >
              <Github className="w-6 h-6 text-neon-400 group-hover:animate-spin" />
              <div className="absolute inset-0 bg-neon-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </a>
            <a 
              href="#" 
              className="group relative w-12 h-12 bg-void-800/50 border border-cyber-500/30 rounded-xl flex items-center justify-center hover:border-cyber-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-500/30"
            >
              <svg className="w-6 h-6 text-cyber-400 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="absolute inset-0 bg-cyber-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-neon-400 text-sm font-matrix mb-2">SCROLL_DOWN</span>
              <ArrowDown className="w-6 h-6 text-neon-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;