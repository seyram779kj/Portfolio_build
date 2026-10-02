import React from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, PROFILE, SKILL_GROUPS, VOLUNTEERING, WORK_EXPERIENCE } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';
import { downloadResumePdf } from '../utils/downloadResumePdf';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = React.useState(false);
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const { photoUrl } = useProfilePhoto();

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setIsDownloading(true);
    const success = downloadResumePdf();
    setIsDownloading(false);
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${PROFILE.legalName} - Product Manager & Computer Science Professional\nLocation: ${PROFILE.location}\nEmail: ${PROFILE.email}\nPhone: ${PROFILE.phonePrimary} / ${PROFILE.phoneSecondary}\nLinkedIn: ${PROFILE.linkedinDisplay}\n\nPROFESSIONAL SUMMARY:\nProduct Manager and Computer Science professional with hands-on experience in product strategy, user research, requirements gathering, PRD development, UX/UI collaboration, and digital product delivery. Experienced in translating user and business needs into practical technology solutions while working across product, design, engineering, and research teams. Combines product management experience with a strong technical foundation in full-stack software development, including React, TypeScript, Node.js, Express, MongoDB, REST APIs, Git/GitHub, and cloud technologies.`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#13161c] border border-[#1e2430] rounded-2xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden text-slate-200 max-h-[92vh] flex flex-col">
        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 px-4 sm:px-6 py-3 sm:py-4 bg-[#161a23]/95 backdrop-blur-md border-b border-[#1e2430] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 truncate max-w-[40%] font-mono">
            <span className="truncate">{PROFILE.legalName} — Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#ff4d2e] hover:bg-[#e03a1c] disabled:opacity-75 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer min-h-[38px] shadow-sm shadow-orange-500/20 active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors items-center gap-1.5 cursor-pointer min-h-[38px]"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="hidden sm:flex px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer min-h-[38px] items-center gap-1.5"
              title="Copy professional summary text"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm min-h-[44px] min-w-[44px] cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Strict reproduction of CV) */}
        <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#0e1017]">
          {/* Quick Download Alert Banner */}
          <div className="p-3.5 bg-gradient-to-r from-orange-950/40 to-slate-900 border border-orange-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-slate-300">
              <span className="font-semibold text-white">Need an official PDF copy for review or ATS application?</span>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Formatted as standard A4 with clean typography, verifiable links, and full employment details.
              </p>
            </div>
            <button
              onClick={handleDownloadPdf}
              className="px-3 py-1.5 bg-[#ff4d2e] hover:bg-[#e03a1c] text-white font-semibold rounded-lg shrink-0 flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </button>
          </div>
          {/* Header with Portrait */}
          <div className="border-b border-[#1e2430] pb-6 flex items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[#2a2c34] shrink-0 bg-slate-900 shadow-md">
              <img
                src={photoUrl}
                alt={PROFILE.legalName}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5 flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                {PROFILE.legalName}
              </h1>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#ff4d2e] font-mono">
                PRODUCT MANAGER & COMPUTER SCIENCE PROFESSIONAL
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-400 pt-0.5 font-mono">
                <span>{PROFILE.location}</span>
                <span aria-hidden="true">·</span>
                <a href={`tel:${PROFILE.phonePrimary}`} className="hover:text-white">
                  {PROFILE.phonePrimary}
                </a>
                <span aria-hidden="true">·</span>
                <a href={`tel:${PROFILE.phoneSecondary}`} className="hover:text-white">
                  {PROFILE.phoneSecondary}
                </a>
                <span aria-hidden="true">·</span>
                <a href={`mailto:${PROFILE.email}`} className="text-blue-400 hover:underline">
                  {PROFILE.email}
                </a>
                <span aria-hidden="true">·</span>
                <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {PROFILE.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Product Manager and Computer Science professional with hands-on experience in product strategy, user research, requirements gathering, PRD development, UX/UI collaboration, and digital product delivery. Experienced in translating user and business needs into practical technology solutions while working across product, design, engineering, and research teams. Combines product management experience with a strong technical foundation in full-stack software development, including React, TypeScript, Node.js, Express, MongoDB, REST APIs, Git/GitHub, and cloud technologies. Passionate about building user-centered digital products that solve real-world problems and create measurable impact.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Work Experience
            </h2>
            <div className="space-y-5">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                    <span className="font-bold text-white text-sm">{exp.role} — {exp.company}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[#ff4d2e] font-mono">
                    {exp.location}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed font-sans">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-3.5 bg-[#13161c] border border-[#1e2430] rounded-lg space-y-1">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <div className="text-xs text-slate-400">{edu.institution}</div>
                  <div className="text-[11px] font-mono text-slate-400 flex justify-between pt-1">
                    <span>{edu.period}</span>
                    {edu.gpa && <span className="text-[#ff4d2e] font-bold">{edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2.5 bg-[#13161c] border border-[#1e2430] rounded flex justify-between">
                  <span className="text-slate-200">{cert.title}</span>
                  <span className="text-slate-400 text-[11px] shrink-0 ml-2">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              {SKILL_GROUPS.map((cat, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-semibold text-slate-200 block font-mono text-[11px] uppercase tracking-wider text-[#ff4d2e]">
                    {cat.category}:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Awards & Volunteering
            </h2>
            <div className="space-y-2 text-xs">
              {VOLUNTEERING.map((v) => (
                <div key={v.id} className="p-2.5 bg-[#13161c] border border-[#1e2430] rounded flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold">{v.title}</span>
                    <span className="text-slate-400"> — {v.organization}</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px] shrink-0 ml-2">{v.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
