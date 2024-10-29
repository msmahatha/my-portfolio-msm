import React from 'react';
import { Code2, Server, Database, Cpu } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend',
    level: 90,
    skills: ['React', 'TypeScript', 'Tailwind']
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend',
    level: 85,
    skills: ['Node.js', 'Express', 'Python']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database',
    level: 80,
    skills: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'ML/AI',
    level: 75,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn']
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="scanline"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glitch" data-text="Tech Stats">
          Tech Stats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="tech-border bg-black/50 p-6 rounded-lg pixel-corners hover:scale-105 transition-transform"
            >
              <div className="text-purple-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">{skill.title}</h3>
              
              {/* Progress Bar */}
              <div className="h-2 bg-gray-800 rounded-full mb-4">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'loadProgress 1.5s ease-out'
                  }}
                ></div>
              </div>
              
              <div className="space-y-2">
                {skill.skills.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}