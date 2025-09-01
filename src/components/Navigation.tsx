import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Award, Mail, Sun, Moon, Zap, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Vertical Navigation Sidebar */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-void-900/95 backdrop-blur-xl border border-neon-500/30 rounded-2xl p-4 shadow-2xl shadow-neon-500/20 hover:border-neon-500/50 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-xl flex items-center justify-center animate-cyber-pulse hover:animate-spin transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-500 to-cyber-500 text-white shadow-lg shadow-neon-500/40 scale-110'
                      : 'bg-void-800/50 text-gray-400 hover:text-neon-400 hover:bg-neon-500/10 border border-gray-600/30 hover:border-neon-500/50 hover:scale-105'
                  }`}
                  title={item.name}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="bg-void-900/95 backdrop-blur-sm border border-neon-500/50 rounded-lg px-4 py-2 whitespace-nowrap shadow-xl">
                      <span className="text-neon-400 font-matrix text-sm font-medium">{item.name}</span>
                      <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-void-900 border-l border-b border-neon-500/50 rotate-45"></div>
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
              className="w-12 h-12 bg-void-800/50 border border-gray-600/30 rounded-xl flex items-center justify-center hover:bg-surface-700/50 hover:border-neon-500/50 transition-all duration-300 group hover:scale-105"
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

      {/* Mobile Navigation - Enhanced */}
      <nav className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        isScrolled ? 'bg-void-900/95 backdrop-blur-xl border-b border-neon-500/30' : 'bg-transparent'
      }`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-lg flex items-center justify-center animate-cyber-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-cyber font-bold text-lg">PRAVEEN</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-void-800/50 border border-neon-500/30 hover:border-neon-500/60 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neon-400" />
              ) : (
                <Menu className="w-6 h-6 text-neon-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-void-900/95 backdrop-blur-xl border-b border-neon-500/30 shadow-2xl">
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.slice(1);
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-neon-500 to-cyber-500 text-white'
                          : 'text-gray-300 hover:text-neon-400 hover:bg-neon-500/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-matrix">{item.name}</span>
                    </button>
                  );
                })}
                
                <div className="pt-4 border-t border-gray-600/30">
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-neon-400 hover:bg-neon-500/10 transition-all duration-300"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-5 h-5" />
                        <span className="font-matrix">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5" />
                        <span className="font-matrix">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-void-900/50 z-40">
        <div 
          className="h-full bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 transition-all duration-300 ease-out shadow-lg shadow-neon-500/50"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('#home')}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-full flex items-center justify-center shadow-lg shadow-neon-500/30 hover:shadow-neon-500/50 transition-all duration-300 hover:scale-110 animate-bounce lg:hidden"
        >
          <Zap className="w-6 h-6 text-white animate-pulse" />
        </button>
      )}
    </>
  );
};

export default Navigation;