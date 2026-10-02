import React from 'react';
import { AsteriskIcon } from './AsteriskIcon';
import { VOLUNTEERING } from '../data/portfolioData';

export const VolunteeringSection: React.FC = () => {
  return (
    <section id="volunteering" className="relative py-20 bg-[#fafaf8] border-b border-[#e5e5df] overflow-hidden">
      {/* Decorative Cropped Red Asterisk Graphic peeking from right edge matching template */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 z-0">
        <AsteriskIcon className="w-48 h-48 sm:w-64 sm:h-64" color="#ff4d2e" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Section Header with Asterisk */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <AsteriskIcon className="w-7 h-7 sm:w-8 sm:h-8" color="#ff4d2e" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#14151a] tracking-tight">
            Volunteering & Community
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 font-mono">
            Leadership, operations, and community engagement
          </p>
        </div>

        {/* Stack of Clean Bordered Volunteering Cards */}
        <div className="space-y-4">
          {VOLUNTEERING.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 bg-white border border-[#e5e5df] rounded-xl shadow-xs hover:border-[#14151a] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              {/* Left Side: Number Badge + Titles */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#ff4d2e] text-white flex items-center justify-center font-bold text-sm sm:text-base font-display shrink-0 shadow-xs">
                  {idx + 1}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#ff4d2e]">
                    <span>{item.organization}</span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span className="text-slate-600">{item.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#14151a] group-hover:text-[#ff4d2e] transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl pt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side: Period */}
              <div className="text-xs font-mono font-bold text-slate-700 sm:text-right shrink-0 pl-13 sm:pl-0">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
