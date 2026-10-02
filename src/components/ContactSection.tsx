import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Download, Send, Check, Copy, ArrowRight, FileText } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROFILE } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResumePdf';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Product Management Opportunity',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleDownloadCv = () => {
    const ok = downloadResumePdf();
    if (ok) {
      setCvDownloaded(true);
      setTimeout(() => setCvDownloaded(false), 2500);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        role: 'Product Management Opportunity',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels and availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-[#ff4d2e] mb-2">
                <AsteriskIcon className="w-3.5 h-3.5" color="#ff4d2e" />
                <span>GET IN TOUCH</span>
                <span className="text-slate-300">·</span>
                <span>DIRECT CHANNELS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111317] leading-tight">
                Contact & Hiring
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-sans">
                I am actively seeking Product Manager, Associate Product Manager, and technical product roles. If you have an opportunity or want to discuss my work on Lafya AI, GetVaxxed, JESI AI, or full-stack web builds, reach out directly.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs hover:border-slate-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#ff4d2e]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-bold text-[#111317] hover:text-[#ff4d2e] transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 text-xs font-bold text-[#111317] bg-slate-100 hover:bg-[#ff4d2e] hover:text-white rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Line 1 (Primary) */}
              <div className="p-4 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs hover:border-slate-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Primary Phone & WhatsApp
                    </span>
                    <span className="text-sm font-bold text-[#111317] font-mono">{PROFILE.phonePrimary}</span>
                  </div>
                </div>
                <a
                  href={`tel:${PROFILE.phonePrimary}`}
                  className="px-4 py-1.5 text-xs font-bold text-[#111317] bg-slate-100 hover:bg-[#ff4d2e] hover:text-white rounded-xl transition-colors"
                >
                  Call
                </a>
              </div>

              {/* Phone Line 2 (Secondary requested by user: 0552526415) */}
              <div className="p-4 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs hover:border-slate-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ff4d2e]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                      Direct Phone 2 (Ghana)
                    </span>
                    <span className="text-sm font-bold text-[#111317] font-mono">{PROFILE.phoneSecondary}</span>
                  </div>
                </div>
                <a
                  href={`tel:${PROFILE.phoneSecondary}`}
                  className="px-4 py-1.5 text-xs font-bold text-[#111317] bg-slate-100 hover:bg-[#ff4d2e] hover:text-white rounded-xl transition-colors"
                >
                  Call
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs hover:border-slate-400 transition-colors">
                <div className="min-w-0 pr-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                    LinkedIn Profile
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#111317] block truncate">
                    {PROFILE.linkedinDisplay}
                  </span>
                </div>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-[#ff4d2e] bg-orange-50 hover:bg-[#ff4d2e] hover:text-white rounded-xl border border-orange-200 transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Resume Quick Access Button */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Curriculum Vitae
                    </span>
                    <span className="text-sm font-bold">Printable PDF & Summary</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadCv}
                    className="px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#ff4d2e] hover:bg-[#e03a1c] text-white rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95"
                    title="Download official PDF CV"
                  >
                    {cvDownloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={onOpenResume}
                    className="px-2.5 sm:px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
                    title="View CV in browser"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111317] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Leave a note regarding product roles, project collaborations, or inquiries.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ama Mensah"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ama@company.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 block">
                  Opportunity Type
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:bg-white transition-all font-sans"
                >
                  <option value="Product Management Opportunity">Product Management Role</option>
                  <option value="UI/UX & Product Design">UI/UX & Product Design Project</option>
                  <option value="Full-Stack Web Build">Full-Stack Web Development</option>
                  <option value="Research & Data Analysis">Field Research & Data Evaluation</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 block">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, your organization, or project timeline..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-[#111317] hover:bg-[#ff4d2e] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-black/10 active:scale-98 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Message Sent Successfully!</span>
                  </span>
                ) : (
                  <>
                    <span>Send Message to Kingsley</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
