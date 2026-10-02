import React, { useState } from 'react';
import { Phone, ChevronDown, Download, ArrowRight, ChevronRight, X, Menu, Check, FileText } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROFILE } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';
import { downloadResumePdf } from '../utils/downloadResumePdf';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [isDownloadingCv, setIsDownloadingCv] = useState(false);
  const { photoUrl } = useProfilePhoto();

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloadingCv(true);
    const success = downloadResumePdf();
    setIsDownloadingCv(false);
    if (success) {
      setCvDownloaded(true);
      setTimeout(() => setCvDownloaded(false), 2500);
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-2 sm:top-3 z-50 px-3 sm:px-6 max-w-7xl mx-auto transition-all">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5 rounded-2xl sm:rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Brand Zone: High-impact Avatar + Brand lockup */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none rounded-full pr-1"
        >
          {/* Avatar with unedited user photo & glowing active indicator */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-slate-200/80 shrink-0 bg-slate-900">
            <img
              src={photoUrl}
              alt={PROFILE.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Status indicator */}
            <span
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"
              title="Available for roles"
              aria-label="Available for roles"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-bold text-xl sm:text-2xl font-display tracking-tight text-[#111317] group-hover:text-[#ff4d2e] transition-colors">
                kingsley.
              </span>
              <AsteriskIcon className="w-3.5 h-3.5 text-[#ff4d2e] group-hover:rotate-45 transition-transform duration-300" color="#ff4d2e" />
            </div>
            <span className="text-[10px] font-mono tracking-wide text-slate-500 font-medium mt-0.5 hidden xs:block">
              Product Manager
            </span>
          </div>
        </a>

        {/* Center Zone: Refined Navigation Pill Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-slate-100/70 rounded-full border border-slate-200/60 text-xs font-medium text-slate-700">
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            About
          </a>
          <a
            href="#work"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            Work Gallery
          </a>
          <a
            href="#experience"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            Skills
          </a>
          <a
            href="#education"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            Education
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-[#ff4d2e] hover:shadow-xs transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Action Zone: Phone numbers quick popup, CV, and Talk buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Call Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
              className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/80 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
              title="View phone numbers"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span className="hidden md:inline font-mono text-[11px] font-semibold">Direct Lines</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {phoneMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setPhoneMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 z-40 space-y-2 animate-in fade-in duration-150">
                  <div className="text-[10px] font-mono tracking-wider text-slate-400 font-semibold px-2 pt-1 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#ff4d2e]" />
                    <span>Call or WhatsApp</span>
                  </div>
                  <a
                    href={`tel:${PROFILE.phonePrimary}`}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-orange-50/80 transition-colors text-xs font-mono font-semibold text-slate-800 hover:text-[#ff4d2e]"
                  >
                    <span>{PROFILE.phonePrimary}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 font-sans">Primary</span>
                  </a>
                  <a
                    href={`tel:${PROFILE.phoneSecondary}`}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-orange-50/80 transition-colors text-xs font-mono font-semibold text-slate-800 hover:text-[#ff4d2e]"
                  >
                    <span>{PROFILE.phoneSecondary}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 font-sans">Direct</span>
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Download CV & Preview Button Lockup */}
          <div className="hidden xs:flex items-center rounded-full border border-slate-300 hover:border-[#111317] bg-white transition-all shadow-xs overflow-hidden">
            <button
              onClick={handleDownloadCv}
              disabled={isDownloadingCv}
              className="px-3.5 py-2 text-xs font-semibold text-[#111317] hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
              title="Download official PDF CV"
            >
              {cvDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Saved!</span>
                </>
              ) : (
                <>
                  <span>{isDownloadingCv ? 'PDF...' : 'CV'}</span>
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                </>
              )}
            </button>
            <div className="w-[1px] h-4 bg-slate-200" />
            <button
              onClick={onOpenResume}
              className="px-2.5 py-2 text-[11px] font-medium text-slate-500 hover:text-[#ff4d2e] hover:bg-slate-50 transition-colors cursor-pointer"
              title="Preview CV online in browser"
            >
              View
            </button>
          </div>

          {/* Let's Talk CTA */}
          <button
            onClick={onOpenContact}
            className="px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-[#111317] hover:bg-[#ff4d2e] rounded-full transition-all cursor-pointer shadow-md hover:shadow-orange-500/20 flex items-center gap-1.5 active:scale-95"
          >
            <span>Let's talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#111317] hover:text-[#ff4d2e] focus:outline-none rounded-full lg:hidden flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Redesigned Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* User mini card */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 bg-slate-900">
              <img
                src={photoUrl}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-base font-display text-[#111317] truncate">
                {PROFILE.name}
              </div>
              <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Product Manager roles</span>
              </div>
            </div>
          </div>

          {/* Phone links in mobile menu */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <a
              href={`tel:${PROFILE.phonePrimary}`}
              className="p-2.5 bg-white border border-slate-200 rounded-xl text-center font-bold text-slate-800 hover:text-[#ff4d2e] shadow-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>{PROFILE.phonePrimary}</span>
            </a>
            <a
              href={`tel:${PROFILE.phoneSecondary}`}
              className="p-2.5 bg-white border border-slate-200 rounded-xl text-center font-bold text-slate-800 hover:text-[#ff4d2e] shadow-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff4d2e]" />
              <span>{PROFILE.phoneSecondary}</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 font-bold text-xs uppercase tracking-wider text-slate-700 pt-1">
            {[
              { href: '#about', label: 'About Kingsley' },
              { href: '#work', label: 'Work & Design Gallery' },
              { href: '#experience', label: 'Work Experience' },
              { href: '#skills', label: 'Skills & Tools' },
              { href: '#education', label: 'Education & Certifications' },
              { href: '#volunteering', label: 'Volunteering' },
              { href: '#contact', label: 'Contact & Hire' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="p-3 rounded-xl hover:bg-slate-100 hover:text-[#ff4d2e] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <button
              onClick={() => {
                closeMobileMenu();
                onOpenResume();
              }}
              className="p-3 rounded-xl hover:bg-slate-100 hover:text-[#ff4d2e] transition-colors flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <span>View CV Online</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                closeMobileMenu();
                downloadResumePdf();
              }}
              className="py-3 px-3 rounded-xl border border-slate-300 font-bold text-xs uppercase tracking-wider text-slate-800 hover:bg-slate-100 text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenContact();
              }}
              className="py-3 px-4 rounded-xl bg-[#ff4d2e] font-bold text-xs uppercase tracking-wider text-white hover:bg-[#e03a1c] text-center shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
