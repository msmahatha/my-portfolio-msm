import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 relative">
      <div className="scanline"></div>
      <div className="container mx-auto px-6">
        <div className="tech-border bg-black/50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="text-orange-500" />
              <span className="text-purple-500 font-mono">system.status: online</span>
            </div>
            <p className="text-gray-500 font-mono">
              © {new Date().getFullYear()} Madhusudan Mahatha_
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}