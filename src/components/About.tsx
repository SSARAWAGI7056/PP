import React from 'react';
import { Code2, Brain, Rocket, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-void-900 via-surface-900 to-void-800 relative overflow-hidden lg:pl-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-matrix-pattern opacity-30" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cyber">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-cyber-400 animate-glow">SYSTEM</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-500 to-cyber-500 mx-auto mb-8 animate-pulse"></div>
            <p className="text-cyber-300 font-matrix text-lg">
              {'>'} Loading personal_data.json...
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <ScrollReveal direction="left" delay={400}>
            <div className="space-y-6">
              <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-8 animate-cyber-pulse">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-neon-500 rounded-full mr-3 animate-pulse" />
                <span className="text-neon-400 font-matrix text-sm">PERSONAL_INFO.txt</span>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hi there! I'm Praveen Sarawagi, a passionate 3rd-year B.Tech Computer Science student 
                specializing in Artificial Intelligence and Machine Learning. I'm fascinated by the 
                potential of AI to transform industries and solve complex real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                My journey in AI/ML began with curiosity about how machines can learn and make decisions. 
                Today, I'm actively working on projects involving deep learning, natural language processing, 
                and computer vision, constantly pushing the boundaries of what's possible with AI.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently seeking internship opportunities and research collaborations where I can 
                contribute to meaningful AI projects while learning from industry experts and academics.
              </p>
              </div>

              {/* Fun Fact Terminal */}
              <div className="bg-void-900/80 backdrop-blur-sm border border-electric-500/30 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-neon-500 rounded-full" />
                </div>
                <span className="text-electric-400 font-matrix text-sm">terminal.exe</span>
              </div>
              <div className="font-matrix text-sm space-y-2">
                <p className="text-neon-400">$ cat fun_fact.txt</p>
                <p className="text-gray-300 pl-4">
                  I once trained a neural network to recognize my handwriting, and it was more accurate 
                  than my professors at reading my exam answers! 😄
                </p>
                <p className="text-neon-400 animate-pulse">$ _</p>
              </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills Cards */}
          <ScrollReveal direction="right" delay={600}>
            <div className="space-y-6">
            <div className="bg-void-800/50 backdrop-blur-sm border border-neon-500/30 rounded-2xl p-6 hover:border-neon-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-neon-500 to-neon-600 rounded-xl mr-4 group-hover:animate-spin">
                  <Code2 className="w-6 h-6 text-void-900" />
                </div>
                <h3 className="text-xl font-bold text-white font-cyber">FULL-STACK_DEV</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building end-to-end applications with modern web technologies and AI integrations.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-void-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-500 to-cyber-500 h-2 rounded-full w-4/5 animate-pulse" />
                </div>
                <span className="text-neon-400 text-sm ml-3 font-matrix">80%</span>
              </div>
            </div>

            <div className="bg-void-800/50 backdrop-blur-sm border border-cyber-500/30 rounded-2xl p-6 hover:border-cyber-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyber-500 to-cyber-600 rounded-xl mr-4 group-hover:animate-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-cyber">AI/ML_RESEARCH</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Exploring cutting-edge algorithms and contributing to the advancement of artificial intelligence.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-void-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyber-500 to-electric-500 h-2 rounded-full w-5/6 animate-pulse" />
                </div>
                <span className="text-cyber-400 text-sm ml-3 font-matrix">85%</span>
              </div>
            </div>

            <div className="bg-void-800/50 backdrop-blur-sm border border-electric-500/30 rounded-2xl p-6 hover:border-electric-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-xl mr-4 group-hover:animate-bounce">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-cyber">INNOVATION_ENGINE</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Turning creative ideas into practical solutions that make a real impact.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-void-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-electric-500 to-neon-500 h-2 rounded-full w-11/12 animate-pulse" />
                </div>
                <span className="text-electric-400 text-sm ml-3 font-matrix">90%</span>
              </div>
            </div>

            {/* System Stats */}
            <div className="bg-gradient-to-r from-void-800/50 to-surface-800/50 backdrop-blur-sm border border-neon-500/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-5 h-5 text-neon-400 mr-2 animate-pulse" />
                <span className="text-neon-400 font-matrix text-sm">SYSTEM_METRICS</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-400 font-matrix">15+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyber-400 font-matrix">3</div>
                  <div className="text-gray-400">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-400 font-matrix">5+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-400 font-matrix">∞</div>
                  <div className="text-gray-400">Curiosity</div>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;