import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Award, Mail, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Vertical Navigation Sidebar */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-void-900/90 backdrop-blur-xl border border-neon-500/30 rounded-2xl p-4 shadow-2xl shadow-neon-500/20">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-xl flex items-center justify-center animate-cyber-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-500 to-cyber-500 text-white shadow-lg shadow-neon-500/30'
                      : 'bg-void-800/50 text-gray-400 hover:text-neon-400 hover:bg-neon-500/10 border border-gray-600/30 hover:border-neon-500/50'
                  }`}
                  title={item.name}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                  
                  {/* Tooltip */}
                  <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-void-900/95 backdrop-blur-sm border border-neon-500/30 rounded-lg px-3 py-2 whitespace-nowrap">
                      <span className="text-neon-400 font-matrix text-sm">{item.name}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <div className="mt-8 pt-4 border-t border-gray-600/30">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 bg-void-800/50 border border-gray-600/30 rounded-xl flex items-center justify-center hover:bg-surface-700/50 hover:border-neon-500/50 transition-all duration-300 group"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-neon-400 group-hover:animate-spin" />
              ) : (
                <Moon className="w-5 h-5 text-cyber-400 group-hover:animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Top Bar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-void-900/90 backdrop-blur-xl border border-neon-500/30 rounded-2xl px-6 py-3 shadow-2xl shadow-neon-500/20">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="w-8 h-8 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-lg flex items-center justify-center animate-cyber-pulse">
              <Zap className="w-4 h-4 text-white" />
            </div>

            {/* Mobile Nav Items */}
            <div className="flex items-center space-x-2">
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-neon-400 bg-neon-500/10'
                        : 'text-gray-400 hover:text-neon-400 hover:bg-neon-500/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface-800/50 hover:bg-surface-700/50 transition-all duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-neon-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyber-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-void-900/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 transition-all duration-300 ease-out"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>
    </>
  );
};

export default Navigation;