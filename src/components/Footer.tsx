import React, { useState } from 'react';
import { ArrowUp, Download, Check, FileText } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROFILE } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResumePdf';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const currentYear = new Date().getFullYear();
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    const ok = downloadResumePdf();
    if (ok) {
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2500);
    }
  };

  return (
    <footer className="bg-[#121316] text-white border-t border-[#2a2c34] py-14 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <AsteriskIcon className="w-5 h-5" color="#ff4d2e" />
            <span className="font-bold text-2xl tracking-tight font-display text-white">
              kingsley.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#" className="hover:text-[#ff4d2e] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#ff4d2e] transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-[#ff4d2e] transition-colors">
              Work Gallery
            </a>
            <a href="#experience" className="hover:text-[#ff4d2e] transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#ff4d2e] transition-colors">
              Skills & Tools
            </a>
            <a href="#education" className="hover:text-[#ff4d2e] transition-colors">
              Education
            </a>
            <a href="#volunteering" className="hover:text-[#ff4d2e] transition-colors">
              Volunteering
            </a>
            <a href="#contact" className="hover:text-[#ff4d2e] transition-colors">
              Contact
            </a>
            <button
              onClick={handleDownloadCv}
              className="hover:text-[#ff4d2e] transition-colors cursor-pointer flex items-center gap-1.5"
              title="Download official PDF CV"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">CV Saved!</span>
                </>
              ) : (
                <>
                  <span>Download CV (PDF)</span>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </>
              )}
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-[#ff4d2e] transition-colors cursor-pointer flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <span>View Online</span>
              <FileText className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {currentYear} {PROFILE.legalName}. Product Manager & Computer Science Professional · Accra & Ho, Ghana.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono">
              Direct: {PROFILE.phonePrimary} · {PROFILE.phoneSecondary}
            </span>
            <a
              href="#"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors uppercase font-bold tracking-wider flex items-center gap-1.5 text-[11px]"
            >
              <ArrowUp className="w-3 h-3 text-[#ff4d2e]" />
              <span>Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
