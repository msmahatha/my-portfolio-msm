import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group"
    >
      <div className="bg-white/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:bg-purple-50">
        <div className="text-gray-700 group-hover:text-purple-600">
          {icon}
        </div>
      </div>
      {label && <span className="text-gray-600 group-hover:text-purple-600">{label}</span>}
    </a>
  );
}