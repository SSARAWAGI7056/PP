import React from 'react';
import { Calendar, MapPin, Award, Code, Users, Zap, Trophy } from 'lucide-react';
import type { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'AI Research Intern',
      company: 'Tech Innovation Lab',
      period: 'June 2024 - August 2024',
      description: 'Developed deep learning models for natural language processing. Implemented BERT-based sentiment analysis achieving 92% accuracy on customer feedback data.',
      type: 'internship'
    },
    {
      id: '2',
      title: 'Machine Learning Developer',
      company: 'DataScience Hackathon',
      period: 'March 2024',
      description: 'Won 1st place developing a real-time fraud detection system using ensemble methods. Led a team of 4 developers in a 48-hour competition.',
      type: 'hackathon'
    },
    {
      id: '3',
      title: 'Research Assistant',
      company: 'University AI Lab',
      period: 'January 2024 - Present',
      description: 'Contributing to research on computer vision applications in healthcare. Co-authored 2 papers on medical image analysis using CNNs.',
      type: 'research'
    },
    {
      id: '4',
      title: 'Full-Stack Developer',
      company: 'E-Commerce Startup',
      period: 'September 2023 - December 2023',
      description: 'Built recommendation engine and user analytics dashboard. Improved user engagement by 35% through personalized product suggestions.',
      type: 'project'
    }
  ];

  const getIcon = (type: Experience['type']) => {
    switch (type) {
      case 'internship':
        return <Code className="w-5 h-5" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5" />;
      case 'research':
        return <Users className="w-5 h-5" />;
      case 'project':
        return <Zap className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'internship':
        return { bg: 'from-cyber-500 to-cyber-600', border: 'border-cyber-500/50', text: 'text-cyber-400' };
      case 'hackathon':
        return { bg: 'from-electric-500 to-electric-600', border: 'border-electric-500/50', text: 'text-electric-400' };
      case 'research':
        return { bg: 'from-matrix-500 to-matrix-600', border: 'border-matrix-500/50', text: 'text-matrix-400' };
      case 'project':
        return { bg: 'from-neon-500 to-neon-600', border: 'border-neon-500/50', text: 'text-neon-400' };
      default:
        return { bg: 'from-gray-500 to-gray-600', border: 'border-gray-500/50', text: 'text-gray-400' };
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-surface-900 via-void-800 to-surface-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
            EXPERIENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400 animate-glow">LOG</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-500 via-cyber-500 to-electric-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-lg text-cyber-300 max-w-2xl mx-auto font-matrix">
            &gt; Career progression through AI/ML research and development
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quantum Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-500 via-cyber-500 via-electric-500 to-matrix-500 rounded-full animate-pulse"></div>

          {experiences.map((experience, index) => {
            const colors = getTypeColor(experience.type);
            return (
              <div
                key={experience.id}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative group`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-cyber-pulse border-4 border-void-900`}>
                    {getIcon(experience.type)}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className={`bg-void-800/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-void-800/70 transition-all duration-500 hover:shadow-xl hover:shadow-neon-500/10 group-hover:border-neon-500/60`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-cyber group-hover:text-neon-400 transition-colors">
                          {experience.title}
                        </h3>
                        <p className={`${colors.text} font-semibold mb-3 font-matrix`}>
                          {experience.company}
                        </p>
                      </div>
                      <span className={`px-3 py-1 bg-gradient-to-r ${colors.bg} text-white text-xs rounded-full uppercase tracking-wider font-matrix shadow-lg`}>
                        {experience.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4 font-matrix">
                      <Calendar className="w-4 h-4 mr-2 text-neon-400" />
                      {experience.period}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed font-matrix text-sm">
                      {experience.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-neon-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-neon-400 text-xs font-matrix">STATUS: COMPLETED</span>
                      </div>
                      <div className="text-xs text-gray-500 font-matrix">
                        ID: {experience.id.padStart(4, '0')}
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

        {/* Achievements Matrix */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-cyber">
            ACHIEVEMENT_<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-electric-400">REGISTRY</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AWS ML Specialist',
                organization: 'Amazon Web Services',
                date: 'December 2024',
                type: 'certification',
                color: 'neon'
              },
              {
                title: '1st Place - AI Hackathon',
                organization: 'TechFest 2024',
                date: 'March 2024',
                type: 'award',
                color: 'electric'
              },
              {
                title: 'Kaggle Expert',
                organization: 'Kaggle',
                date: 'October 2024',
                type: 'competition',
                color: 'cyber'
              },
              {
                title: 'Deep Learning Specialist',
                organization: 'Coursera',
                date: 'August 2024',
                type: 'certification',
                color: 'matrix'
              },
              {
                title: '2nd Place - ML Competition',
                organization: 'CodeChef',
                date: 'June 2024',
                type: 'competition',
                color: 'neon'
              },
              {
                title: 'GCP AI Engineer',
                organization: 'Google Cloud',
                date: 'September 2024',
                type: 'certification',
                color: 'electric'
              }
            ].map((achievement, index) => {
              const colors = getTypeColor(achievement.type as any);
              return (
                <div
                  key={index}
                  className={`bg-void-800/30 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-void-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-500/10 group hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 bg-gradient-to-r ${colors.bg} rounded-lg group-hover:animate-pulse`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-400 font-matrix">{achievement.date}</span>
                  </div>
                  
                  <h4 className={`font-semibold text-white mb-2 group-hover:${colors.text} transition-colors font-cyber`}>
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-matrix">
                    {achievement.organization}
                  </p>
                  
                  {/* Achievement Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`px-2 py-1 bg-gradient-to-r ${colors.bg} text-white text-xs rounded-full font-matrix uppercase`}>
                      {achievement.type}
                    </span>
                    <div className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;