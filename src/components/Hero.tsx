import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Zap, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> System initialized...',
    '> Contact module loaded successfully',
    '> Ready to receive transmission'
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate terminal output
    setTerminalOutput(prev => [
      ...prev,
      '> Encrypting message...',
      '> Establishing secure connection...',
      '> Message transmitted successfully',
      '> Response expected within 24 hours'
    ]);
    
    setTimeout(() => {
      alert('Message transmitted successfully! I\'ll respond within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-void-900 via-surface-900 to-void-900 relative overflow-hidden lg:pl-32">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-20" />
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-500/50 to-transparent animate-pulse" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">CONTACT</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-cyber-300 max-w-2xl mx-auto font-matrix">
            &gt; Ready to collaborate on innovative AI projects? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Terminal */}
          <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl overflow-hidden hover:border-neon-500/60 transition-all duration-500 animate-cyber-pulse">
            {/* Terminal Header */}
            <div className="bg-void-900/80 px-6 py-4 border-b border-neon-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-neon-400 font-matrix text-sm">contact_form.exe</span>
                </div>
                <Terminal className="w-5 h-5 text-neon-400" />
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="bg-void-900/50 rounded-lg p-4 font-matrix text-sm">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="text-neon-400 mb-1 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                      {line}
                    </div>
                  ))}
                  <div className="text-neon-400 animate-pulse">$ _</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neon-400 mb-2 font-matrix">
                    &gt; SENDER_NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-neon-500/30 rounded-lg text-white font-matrix placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-500 focus:border-transparent transition-all hover:border-neon-500/60"
                    placeholder="Enter identification..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyber-400 mb-2 font-matrix">
                    &gt; TRANSMISSION_ADDRESS:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-cyber-500/30 rounded-lg text-white font-matrix placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all hover:border-cyber-500/60"
                    placeholder="Enter communication channel..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-electric-400 mb-2 font-matrix">
                    &gt; MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-void-700/50 border border-electric-500/30 rounded-lg text-white font-matrix placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all resize-none hover:border-electric-500/60"
                    placeholder="Compose your transmission..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-500 to-cyber-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-matrix group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:animate-pulse" />
                      SEND_MESSAGE()
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Matrix */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-void-800/50 backdrop-blur-sm border border-cyber-500/30 rounded-2xl p-8 hover:border-cyber-500/60 transition-all duration-500">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-cyber-400 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-white font-cyber">CONTACT_PROTOCOLS</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-neon-500 to-neon-600 rounded-xl group-hover:animate-spin">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-matrix">EMAIL_CHANNEL</h4>
                    <p className="text-neon-400 font-matrix">praveen.sarawagi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-xl group-hover:animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-matrix">VOICE_PROTOCOL</h4>
                    <p className="text-cyber-400 font-matrix">+91 XXXX-XXXX-XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-xl group-hover:animate-bounce">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 font-matrix">LOCATION_DATA</h4>
                    <p className="text-electric-400 font-matrix">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Matrix */}
            <div className="bg-void-800/50 backdrop-blur-sm border border-electric-500/30 rounded-2xl p-8 hover:border-electric-500/60 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6 font-cyber flex items-center">
                <Terminal className="w-5 h-5 mr-3 text-electric-400" />
                SOCIAL_NETWORK
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="group relative p-6 bg-void-700/50 border border-neon-500/30 rounded-xl hover:bg-void-700/70 hover:border-neon-500/60 transition-all duration-300 text-center overflow-hidden"
                >
                  <Github className="w-8 h-8 text-neon-400 mx-auto mb-3 group-hover:animate-spin" />
                  <span className="text-sm text-white font-matrix">GITHUB</span>
                  <div className="absolute inset-0 bg-neon-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group relative p-6 bg-void-700/50 border border-cyber-500/30 rounded-xl hover:bg-void-700/70 hover:border-cyber-500/60 transition-all duration-300 text-center overflow-hidden"
                >
                  <Linkedin className="w-8 h-8 text-cyber-400 mx-auto mb-3 group-hover:animate-pulse" />
                  <span className="text-sm text-white font-matrix">LINKEDIN</span>
                  <div className="absolute inset-0 bg-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group relative p-6 bg-void-700/50 border border-electric-500/30 rounded-xl hover:bg-void-700/70 hover:border-electric-500/60 transition-all duration-300 text-center overflow-hidden"
                >
                  <Twitter className="w-8 h-8 text-electric-400 mx-auto mb-3 group-hover:animate-bounce" />
                  <span className="text-sm text-white font-matrix">TWITTER</span>
                  <div className="absolute inset-0 bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            {/* Resume Download Terminal */}
            <div className="bg-gradient-to-r from-void-800/50 to-surface-800/50 backdrop-blur-sm border border-matrix-500/30 rounded-2xl p-8 hover:border-matrix-500/60 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-matrix-500 rounded-full animate-pulse" />
                </div>
                <span className="text-matrix-400 font-matrix text-sm">resume_downloader.exe</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-cyber">DOWNLOAD_RESUME</h3>
              <p className="text-gray-300 mb-6 font-matrix text-sm">
                &gt; Access comprehensive skill matrix and project documentation
              </p>
              
              <button className="w-full px-6 py-4 bg-gradient-to-r from-matrix-500 to-matrix-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-matrix-500/30 transition-all duration-300 flex items-center justify-center gap-2 font-matrix group">
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                EXECUTE_DOWNLOAD.pdf
              </button>
            </div>

            {/* Status Panel */}
            <div className="bg-void-900/80 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-neon-400 font-matrix text-sm">SYSTEM_STATUS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" />
                  <span className="text-neon-400 font-matrix text-xs">ONLINE</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm font-matrix">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-cyber-400">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-neon-400">24/7 Monitoring</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Level:</span>
                  <span className="text-electric-400">Maximum Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;