import React from 'react';
import { AsteriskIcon } from './AsteriskIcon';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'PRODUCT STRATEGY',
    'USER RESEARCH',
    'PRDs & WORKFLOWS',
    'HEALTH-TECH',
    'FIGMA & LOVABLE',
    'REACT & TYPESCRIPT',
    'NODE.JS & EXPRESS',
    'AWS (EC2, S3, LAMBDA)',
    'AGILE / SCRUM',
    'DATA QA & UNIT TESTING',
  ];

  return (
    <div className="relative py-4 my-8 overflow-hidden z-20">
      {/* Black rotated ribbon matching design */}
      <div className="bg-[#121316] text-white py-4 shadow-xl transform -rotate-2 -mx-4 sm:-mx-8 lg:-mx-12 overflow-hidden border-y border-[#2a2c34]">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase font-display text-white">
                {text}
              </span>
              <AsteriskIcon className="w-3.5 h-3.5 shrink-0" color="#ff4d2e" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
