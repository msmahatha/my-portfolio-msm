import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: 'Ground Water Level Predictor',
    description: 'It Predicts ground water level of are using Historical data.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['React', 'TensorFlow.js', 'Three.js']
  },
  {
    title: 'Teachers attendance system through Computer Vision',
    description: 'Web-based attendance system for every period of the teachers .',
    image: 'https://i.ibb.co/KKq30HY/openCV.png',
    tech: ['TypeScript', 'WebAssembly', 'Python']
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="scanline"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glitch" data-text="Mission Log">
          Mission Log
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="tech-border bg-black/50 rounded-lg pixel-corners overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                
                {/* Overlay Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href="#"
                    className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-500">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}