import React from 'react';
import { CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Section Header with Asterisk */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <AsteriskIcon className="w-7 h-7 sm:w-8 sm:h-8" color="#ff4d2e" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111317] tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 font-mono">
            Academic qualifications and professional accreditations
          </p>
        </div>

        {/* Education Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-slate-500">
            <GraduationCap className="w-4 h-4 text-[#ff4d2e]" />
            <span>Degrees & Higher Education</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-800 hover:shadow-lg transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <span className="font-semibold text-[#ff4d2e] px-2 py-0.5 bg-orange-50 rounded-md">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-[#111317]">
                    {edu.degree}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">
                    {edu.institution}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between font-mono">
                  <span>Status:</span>
                  <span className="text-[#111317] font-bold">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            <Award className="w-4 h-4 text-[#ff4d2e]" />
            <span>Professional Certifications ({CERTIFICATIONS.length})</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-5 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between space-y-3 hover:border-slate-800 hover:shadow-md transition-all"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase text-[#ff4d2e]">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold text-[10px]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-[#111317] font-display leading-snug">
                    {cert.title}
                  </h5>
                </div>
                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  {cert.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
