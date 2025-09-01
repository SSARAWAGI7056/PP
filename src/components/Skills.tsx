import React, { useState } from 'react';
import { Code2, Database, Cloud, GitBranch, Cpu, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "CORE_PROGRAMMING",
      icon: <Code2 className="w-6 h-6" />,
      color: "neon",
      skills: [
        { name: "Python", level: 90, specialty: "AI/ML Primary" },
        { name: "Java", level: 85, specialty: "Enterprise Apps" },
        { name: "C++", level: 80, specialty: "Performance Critical" },
        { name: "JavaScript", level: 75, specialty: "Web Development" },
        { name: "SQL", level: 70, specialty: "Data Management" }
      ]
    },
    {
      title: "AI_ML_FRAMEWORKS",
      icon: <Cpu className="w-6 h-6" />,
      color: "cyber",
      skills: [
        { name: "TensorFlow", level: 85, specialty: "Deep Learning" },
        { name: "PyTorch", level: 80, specialty: "Research & Prototyping" },
        { name: "Scikit-learn", level: 85, specialty: "Classical ML" },
        { name: "OpenCV", level: 75, specialty: "Computer Vision" },
        { name: "Hugging Face", level: 70, specialty: "NLP Models" }
      ]
    },
    {
      title: "CLOUD_DEVOPS",
      icon: <Cloud className="w-6 h-6" />,
      color: "electric",
      skills: [
        { name: "React", level: 80, specialty: "Frontend Framework" },
        { name: "Next.js", level: 75, specialty: "Full-Stack React" },
        { name: "AWS", level: 70, specialty: "Cloud Infrastructure" },
        { name: "Docker", level: 65, specialty: "Containerization" },
        { name: "GCP", level: 60, specialty: "ML Platform" }
      ]
    },
    {
      title: "DEV_TOOLS",
      icon: <GitBranch className="w-6 h-6" />,
      color: "matrix",
      skills: [
        { name: "Git", level: 85, specialty: "Version Control" },
        { name: "Linux", level: 80, specialty: "System Administration" },
        { name: "Jupyter", level: 90, specialty: "Data Science" },
        { name: "VS Code", level: 95, specialty: "IDE Mastery" },
        { name: "Postman", level: 75, specialty: "API Testing" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      neon: {
        border: 'border-neon-500/30 hover:border-neon-500/60',
        bg: 'from-neon-500 to-neon-600',
        text: 'text-neon-400',
        glow: 'shadow-neon-500/20 hover:shadow-neon-500/40'
      },
      cyber: {
        border: 'border-cyber-500/30 hover:border-cyber-500/60',
        bg: 'from-cyber-500 to-cyber-600',
        text: 'text-cyber-400',
        glow: 'shadow-cyber-500/20 hover:shadow-cyber-500/40'
      },
      electric: {
        border: 'border-electric-500/30 hover:border-electric-500/60',
        bg: 'from-electric-500 to-electric-600',
        text: 'text-electric-400',
        glow: 'shadow-electric-500/20 hover:shadow-electric-500/40'
      },
      matrix: {
        border: 'border-matrix-500/30 hover:border-matrix-500/60',
        bg: 'from-matrix-500 to-matrix-600',
        text: 'text-matrix-400',
        glow: 'shadow-matrix-500/20 hover:shadow-matrix-500/40'
      }
    };
    return colors[color as keyof typeof colors] || colors.neon;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">ARSENAL</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
            &gt; Comprehensive toolkit for building intelligent systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div 
                key={category.title}
                className={`bg-void-800/30 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-8 hover:bg-void-800/50 transition-all duration-500 ${colorClasses.glow} group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 bg-gradient-to-r ${colorClasses.bg} rounded-xl mr-4 group-hover:animate-spin`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${colorClasses.text} font-cyber tracking-wider`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="group/skill cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium font-matrix">
                            {skill.name}
                          </span>
                          {hoveredSkill === skill.name && (
                            <span className="text-xs text-gray-400 animate-fade-in">
                              {skill.specialty}
                            </span>
                          )}
                        </div>
                        <span className={`text-sm ${colorClasses.text} font-matrix`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-void-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${colorClasses.bg} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 200 + skillIndex * 100}ms`
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                          </div>
                        </div>
                        
                        {/* Skill level indicators */}
                        <div className="absolute top-0 left-0 w-full h-3 flex justify-between items-center px-1">
                          {[20, 40, 60, 80].map((mark) => (
                            <div 
                              key={mark}
                              className={`w-px h-2 ${skill.level >= mark ? 'bg-white/50' : 'bg-gray-600'} transition-colors duration-500`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Timeline - Futuristic Version */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-cyber">
            EVOLUTION_<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400">TIMELINE</span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Beam */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-500 via-cyber-500 to-electric-500 animate-pulse"></div>
            
            {[
              { 
                year: "2022", 
                milestone: "SYSTEM_BOOT", 
                description: "Initialized B.Tech CSE (AIML) program",
                status: "COMPLETED",
                color: "neon"
              },
              { 
                year: "2023", 
                milestone: "FIRST_ML_MODULE", 
                description: "Deployed sentiment analysis neural network",
                status: "COMPLETED",
                color: "cyber"
              },
              { 
                year: "2024", 
                milestone: "DEEP_LEARNING_UNLOCK", 
                description: "Mastered CNNs and computer vision algorithms",
                status: "COMPLETED",
                color: "electric"
              },
              { 
                year: "2025", 
                milestone: "RESEARCH_MODE_ACTIVE", 
                description: "Contributing to cutting-edge AI research",
                status: "IN_PROGRESS",
                color: "matrix"
              }
            ].map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              return (
                <div 
                  key={item.year}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-full flex items-center justify-center text-white shadow-lg ${colorClasses.glow} animate-cyber-pulse`}>
                      <span className="font-matrix font-bold">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className={`bg-void-800/50 backdrop-blur-sm border ${colorClasses.border} rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-300 ${colorClasses.glow}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`text-lg font-bold ${colorClasses.text} font-cyber`}>
                          {item.milestone}
                        </h4>
                        <span className={`px-3 py-1 bg-gradient-to-r ${colorClasses.bg} text-white text-xs rounded-full font-matrix uppercase tracking-wider`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed font-matrix text-sm">
                        {item.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center">
                        <div className="w-full bg-void-700 rounded-full h-1">
                          <div 
                            className={`bg-gradient-to-r ${colorClasses.bg} h-1 rounded-full ${item.status === 'COMPLETED' ? 'w-full' : 'w-3/4 animate-pulse'}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Matrix Visualization */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-8 font-cyber">
            SKILL_<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-cyber-400">MATRIX</span>
          </h3>
          
          <div className="bg-void-900/50 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "AI/ML", value: 85, icon: "🧠" },
                { label: "Web Dev", value: 80, icon: "🌐" },
                { label: "Data Science", value: 75, icon: "📊" },
                { label: "Cloud Tech", value: 70, icon: "☁️" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-void-700 to-surface-700 flex items-center justify-center border-2 border-neon-500/30 group-hover:border-neon-500/60 transition-all duration-300">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-500/20 to-cyber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </div>
                  <div className="text-3xl font-bold text-neon-400 font-matrix mb-1">
                    {stat.value}%
                  </div>
                  <div className="text-gray-400 font-matrix text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;