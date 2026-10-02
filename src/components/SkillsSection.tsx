import React from 'react';
import { AsteriskIcon } from './AsteriskIcon';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#fafaf8] border-b border-[#e5e5df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Section Header with Asterisk */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <AsteriskIcon className="w-7 h-7 sm:w-8 sm:h-8" color="#ff4d2e" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#14151a] tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 font-mono">
            Product, UX/UI, Cloud & AI capabilities
          </p>
        </div>

        {/* 4 Grouped Cards matching prompt: Product, Design, Data & AWS, AI tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 bg-white border border-[#e5e5df] rounded-xl space-y-5 hover:border-[#14151a] hover:shadow-lg transition-all"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-semibold tracking-wider text-[#ff4d2e] font-mono block">
                  Category
                </span>
                <h3 className="text-xl font-bold font-display text-[#14151a]">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-600 font-sans">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-800 rounded hover:border-[#ff4d2e] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
