import React from 'react';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=1000&h=1000" 
                alt="Developer" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="prose lg:prose-xl">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a passionate developer with 5 years of experience in creating beautiful and functional web applications. 
                I specialize in React, Node.js, and modern web technologies, always striving to build scalable and maintainable solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical blog posts and community events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}