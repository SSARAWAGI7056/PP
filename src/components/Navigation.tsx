import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
    { name: 'Home', href: '#home', icon: '◉' },
    { name: 'About', href: '#about', icon: '◈' },
    { name: 'Skills', href: '#skills', icon: '◇' },
    { name: 'Projects', href: '#projects', icon: '◆' },
    { name: 'Experience', href: '#experience', icon: '◉' },
    { name: 'Contact', href: '#contact', icon: '◈' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'
      }`}>
        <div className="bg-void-900/80 backdrop-blur-xl border border-neon-500/30 rounded-2xl px-6 py-3 shadow-2xl shadow-neon-500/20">
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <div className="flex items-center mr-6">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-500 to-cyber-500 rounded-lg flex items-center justify-center mr-2 animate-cyber-pulse">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-neon-400 to-cyber-400 bg-clip-text text-transparent">
                PS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                    activeSection === item.href.slice(1)
                      ? 'text-neon-400 bg-neon-500/10 shadow-lg shadow-neon-500/20'
                      : 'text-gray-300 hover:text-neon-400 hover:bg-neon-500/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xs">{item.icon}</span>
                    {item.name}
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-500/20 to-cyber-500/20 rounded-xl animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-all duration-300 ml-4 group"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-neon-400 group-hover:animate-spin" />
              ) : (
                <Moon className="w-5 h-5 text-cyber-400 group-hover:animate-pulse" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-all duration-300 ml-2"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-neon-400" />
              ) : (
                <Menu className="w-5 h-5 text-neon-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-void-900/90 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[90vw]">
            <div className="bg-void-900/95 backdrop-blur-xl border border-neon-500/30 rounded-2xl p-6 shadow-2xl shadow-neon-500/20">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeSection === item.href.slice(1)
                        ? 'text-neon-400 bg-neon-500/10 shadow-lg shadow-neon-500/20'
                        : 'text-gray-300 hover:text-neon-400 hover:bg-neon-500/5'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <div className="flex flex-col space-y-3">
          {/* Quick Contact */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-12 h-12 bg-gradient-to-r from-electric-500 to-electric-600 rounded-full flex items-center justify-center shadow-lg shadow-electric-500/30 hover:shadow-electric-500/50 transition-all duration-300 hover:scale-110 group"
          >
            <span className="text-white text-xl group-hover:animate-pulse">✉</span>
          </button>
          
          {/* Scroll to Top */}
          <button
            onClick={() => scrollToSection('#home')}
            className="w-12 h-12 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-full flex items-center justify-center shadow-lg shadow-cyber-500/30 hover:shadow-cyber-500/50 transition-all duration-300 hover:scale-110 group"
          >
            <span className="text-white text-xl group-hover:animate-bounce">↑</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;