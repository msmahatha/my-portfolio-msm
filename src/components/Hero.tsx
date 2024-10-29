import React from 'react';
import { Terminal, Cpu, Wifi } from 'lucide-react';

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="scanline"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"></div>
      </div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="border border-purple-500/30 rounded"
            style={{
              animation: `pulse ${Math.random() * 2 + 1}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Bar */}
          <div className="flex items-center justify-between mb-8 tech-border bg-black/50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Terminal className="text-orange-500" />
              <span className="text-orange-500">System.Online</span>
            </div>
            <div className="flex items-center gap-4">
              <Cpu className="text-purple-500 animate-pulse" />
              <Wifi className="text-purple-500 animate-pulse" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <h1 
              className="glitch text-6xl font-bold mb-6"
              data-text="Madhusudan Mahatha"
            >
              Madhusudan Mahatha
            </h1>
            <div className="tech-border bg-black/50 p-6 rounded-lg">
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                Full Stack Developer & Machine Learning Enthusiast
              </p>
            </div>

            {/* Command Line */}
            <div className="tech-border bg-black/50 p-4 rounded-lg text-left">
              <div className="font-mono">
                <span className="text-orange-500">root@portfolio</span>
                <span className="text-purple-500">:~$</span>
                <span className="text-green-500 ml-2">./explore.sh</span>
                <span className="animate-pulse">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}