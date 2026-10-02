import React from 'react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#fafaf8] border-b border-[#e5e5df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Split: Left Brand Lockup & Right Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff4d2e] font-mono">
              <span>KINGSLEY KWASI ATITSOGBE</span>
              <AsteriskIcon className="w-3 h-3" color="#ff4d2e" />
              <span>ABOUT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#14151a] tracking-tight leading-[1.15]">
              Product Manager working across product, design, and code.
            </h2>
          </div>

          {/* Right Column: Exactly 3-4 sentences from CV */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 font-sans leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg text-[#14151a] font-medium leading-relaxed">
              I am a Product Manager and Computer Science professional with hands-on experience across product strategy, user research, requirements gathering, PRD development, UX/UI collaboration, and digital product delivery.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              I translate user and business needs into practical technology solutions while working across product, design, engineering, and research teams. My background combines product management with full-stack software development in React, TypeScript, Node.js, Express, MongoDB, REST APIs, Git/GitHub, and AWS cloud technologies. I am passionate about building user-centered digital products that solve real-world problems and create measurable impact.
            </p>

            {/* 4-Column Metadata */}
            <div className="pt-6 border-t border-[#e5e5df] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400 block mb-1">
                  LOCATION
                </span>
                <span className="font-bold text-[#14151a] text-xs sm:text-sm block">
                  {PROFILE.location}
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400 block mb-1">
                  PRIMARY FOCUS
                </span>
                <span className="font-bold text-[#14151a] text-xs sm:text-sm block">
                  Product & Health-Tech
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400 block mb-1">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${PROFILE.phonePrimary}`}
                  className="font-bold text-[#14151a] hover:text-[#ff4d2e] text-xs sm:text-sm block truncate"
                >
                  {PROFILE.phonePrimary}
                </a>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
                  LINKEDIN
                </span>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ff4d2e] hover:underline text-xs sm:text-sm block truncate"
                  title="View LinkedIn profile"
                >
                  {PROFILE.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Box Connected Metric Ticker (All facts strictly from CV) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
          {/* Box 1 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-slate-200">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#14151a] tabular-nums tracking-tight">
              {PROFILE.stats[0].value}
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 mt-2 font-mono">
              {PROFILE.stats[0].label}
            </span>
          </div>

          {/* Box 2: Inverted Black Contrast Box */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-[#14151a] text-white border-b sm:border-b-0 sm:border-r border-slate-800">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tabular-nums tracking-tight">
              {PROFILE.stats[1].value}
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-300 mt-2 font-mono">
              {PROFILE.stats[1].label}
            </span>
          </div>

          {/* Box 3 */}
          <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#14151a] tabular-nums tracking-tight">
              {PROFILE.stats[2].value}
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-500 mt-2 font-mono">
              {PROFILE.stats[2].label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
