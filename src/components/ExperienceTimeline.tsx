import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('node-eight');

  return (
    <section id="experience" className="py-20 bg-[#fafaf8] border-b border-[#e5e5df]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Section Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <AsteriskIcon className="w-7 h-7 sm:w-8 sm:h-8" color="#ff4d2e" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#14151a] tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 font-mono">
            Professional trajectory and impact
          </p>
        </div>

        {/* Timeline list */}
        <div className="space-y-4">
          {WORK_EXPERIENCE.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden shadow-xs ${
                  isExpanded ? 'border-[#14151a] shadow-md' : 'border-[#e5e5df] hover:border-slate-400'
                }`}
              >
                {/* Header row (clickable) */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#ff4d2e]">
                      <span>{exp.company}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="text-slate-600">{exp.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#14151a]">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="text-slate-700 font-bold sm:text-right">
                      {exp.period}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-[#14151a] flex items-center justify-center shrink-0">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-slate-800" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-800" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#e5e5df] space-y-4 text-xs sm:text-sm text-slate-700 font-sans">
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold text-[#14151a] uppercase tracking-wider block font-mono">
                        Key Responsibilities & Contributions
                      </span>
                      <ul className="space-y-2 list-none">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d2e] mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] font-mono">
                        Skills Applied:
                      </span>
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded font-mono text-[11px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
