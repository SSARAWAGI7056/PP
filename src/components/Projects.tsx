import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Zap, Eye } from 'lucide-react';
import type { Project } from '../types';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Neural Chatbot Engine',
      description: 'Advanced conversational AI using transformer architecture with real-time learning capabilities and multi-language support.',
      techStack: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'React'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'NLP',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      title: 'Quantum OCR System',
      description: 'Next-generation text extraction using deep learning with 99.7% accuracy on complex documents and handwritten text.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'CRNN', 'Flask'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Computer Vision',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      title: 'Predictive Analytics Engine',
      description: 'AI-powered recommendation system using advanced collaborative filtering and deep neural networks for personalization.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'MongoDB', 'Docker'],
      githubUrl: '#',
      category: 'AI Apps',
      imageUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      title: 'Real-time Sentiment Matrix',
      description: 'Live sentiment analysis dashboard with streaming data processing and predictive mood forecasting.',
      techStack: ['Python', 'Kafka', 'LSTM', 'D3.js', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Data Science',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      title: 'Neural Style Transfer Lab',
      description: 'Advanced artistic style transfer using GANs with real-time processing and custom style creation capabilities.',
      techStack: ['Python', 'PyTorch', 'Next.js', 'CUDA', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Computer Vision',
      imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      title: 'Cyber Portfolio Interface',
      description: 'This futuristic portfolio featuring advanced animations, holographic effects, and responsive cyber-punk design.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web Dev',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filters = [
    { name: 'All', icon: '◉', color: 'neon' },
    { name: 'NLP', icon: '🧠', color: 'cyber' },
    { name: 'Computer Vision', icon: '👁', color: 'electric' },
    { name: 'AI Apps', icon: '🤖', color: 'matrix' },
    { name: 'Data Science', icon: '📊', color: 'neon' },
    { name: 'Web Dev', icon: '🌐', color: 'cyber' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getFilterColor = (color: string) => {
    const colors = {
      neon: 'from-neon-500 to-neon-600 shadow-neon-500/30',
      cyber: 'from-cyber-500 to-cyber-600 shadow-cyber-500/30',
      electric: 'from-electric-500 to-electric-600 shadow-electric-500/30',
      matrix: 'from-matrix-500 to-matrix-600 shadow-matrix-500/30'
    };
    return colors[color as keyof typeof colors] || colors.neon;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-void-900 via-surface-800 to-void-900 relative overflow-hidden lg:pl-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-20" />
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-neon-500/30 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">SHOWCASE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
              > Innovative AI/ML solutions and cutting-edge applications
            </p>
          </div>
        </ScrollReveal>

        {/* Futuristic Filter System */}
        <ScrollReveal direction="up" delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-4 bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-4">
            <Filter className="w-5 h-5 text-neon-400" />
            <span className="text-neon-400 font-matrix text-sm">FILTER:</span>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 font-matrix text-sm flex items-center gap-2 ${
                    activeFilter === filter.name
                      ? `bg-gradient-to-r ${getFilterColor(filter.color)} text-white shadow-lg`
                      : 'bg-void-700/50 text-gray-300 hover:bg-void-600/50 hover:text-white border border-gray-600/30'
                  }`}
                >
                  <span>{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={600 + index * 150}
            >
              <div
                className="group relative bg-void-800/30 backdrop-blur-sm border border-neon-500/20 rounded-2xl overflow-hidden hover:border-neon-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-neon-500/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-900/90 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500/10 via-transparent to-cyber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-neon-500 to-cyber-500 text-white text-xs rounded-full font-matrix uppercase tracking-wider shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Actions */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 animate-fade-in">
                    <button className="p-3 bg-neon-500/80 backdrop-blur-sm rounded-full hover:bg-neon-500 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-cyber-500/80 backdrop-blur-sm rounded-full hover:bg-cyber-500 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-400 transition-colors font-cyber">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-matrix">
                  {project.description}
                </p>

                {/* Tech Stack with Glow Effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-void-700/50 border border-cyber-500/30 text-cyber-400 text-xs rounded-lg font-matrix hover:border-cyber-500/60 hover:bg-cyber-500/10 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-void-700/50 border border-neon-500/30 text-neon-400 rounded-xl hover:bg-neon-500/10 hover:border-neon-500/60 transition-all duration-300 text-sm font-matrix group"
                  >
                    <Github className="w-4 h-4 group-hover:animate-spin" />
                    SOURCE
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric-500 to-electric-600 text-white rounded-xl hover:shadow-lg hover:shadow-electric-500/30 transition-all duration-300 text-sm font-matrix group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                      DEPLOY
                    </a>
                  )}
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* More Projects Terminal */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="text-center mt-16">
          <div className="inline-block bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-6 hover:border-neon-500/60 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-neon-500 rounded-full" />
              </div>
              <span className="text-neon-400 font-matrix text-sm">github_explorer.exe</span>
            </div>
            
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-void-700 to-surface-700 text-white rounded-xl hover:from-surface-700 hover:to-void-700 transition-all duration-300 font-matrix group-hover:shadow-lg group-hover:shadow-neon-500/20"
            >
              <Github className="w-5 h-5 group-hover:animate-spin" />
              <span>&gt; EXPLORE_ALL_REPOSITORIES()</span>
              <Zap className="w-4 h-4 text-neon-400 group-hover:animate-pulse" />
            </a>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;