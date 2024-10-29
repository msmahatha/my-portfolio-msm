import React from 'react';

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
      {children}
    </h2>
  );
}