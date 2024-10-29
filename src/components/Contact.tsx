import React from 'react';
import { Github, Linkedin, Mail, Terminal, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative">
      <div className="scanline"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glitch" data-text="Initialize Connection">
          Initialize Connection
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="tech-border bg-black/50 p-8 rounded-lg pixel-corners">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-purple-500/30 pb-4">
              <Terminal className="text-orange-500" />
              <span className="text-purple-500 font-mono">connection.establish</span>
            </div>
            
            {/* Terminal Content */}
            <div className="font-mono space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">$</span>
                <span className="text-gray-400">Initializing communication protocols...</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-orange-500">$</span>
                <span className="text-gray-400">Available channels detected:</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <a
                  href="https://github.com/msmahatha/msmahatha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-border bg-black/30 p-4 rounded-lg flex items-center gap-3 hover:bg-purple-500/10 transition-colors"
                >
                  <Github className="text-orange-500" />
                  <span className="text-gray-300">GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/madhusudan-mahatha-373b38229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-border bg-black/30 p-4 rounded-lg flex items-center gap-3 hover:bg-purple-500/10 transition-colors"
                >
                  <Linkedin className="text-orange-500" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>
                
                <a
                  href="mailto:madhusudanmahatha14@gmail.com"
                  className="tech-border bg-black/30 p-4 rounded-lg flex items-center gap-3 hover:bg-purple-500/10 transition-colors"
                >
                  <Mail className="text-orange-500" />
                  <span className="text-gray-300">Email</span>
                </a>

                <a
                  href="https://x.com/MsMahatha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-border bg-black/30 p-4 rounded-lg flex items-center gap-3 hover:bg-purple-500/10 transition-colors"
                >
                  <Twitter className="text-orange-500" />
                  <span className="text-gray-300">Twitter</span>
                </a>

                <a
                  href="https://www.instagram.com/msmahatha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-border bg-black/30 p-4 rounded-lg flex items-center gap-3 hover:bg-purple-500/10 transition-colors"
                >
                  <Instagram className="text-orange-500" />
                  <span className="text-gray-300">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}