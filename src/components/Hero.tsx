import React, { useRef, useState } from 'react';
import { Phone, ArrowDown, Download, ArrowRight, Camera, Upload, RotateCcw, Activity, CheckCircle2, Check } from 'lucide-react';
import { AsteriskIcon } from './AsteriskIcon';
import { PROFILE } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';
import { downloadResumePdf } from '../utils/downloadResumePdf';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onExploreProjects }) => {
  const { photoUrl, handleFileUpload, resetPhoto } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [isDownloadingCv, setIsDownloadingCv] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloadingCv(true);
    const success = downloadResumePdf();
    setIsDownloadingCv(false);
    if (success) {
      setCvDownloaded(true);
      setTimeout(() => setCvDownloaded(false), 3000);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-400/10 via-rose-400/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography with zero overlap and ample breathing room */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs self-start text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-slate-800">
                Product Manager at Node Eight
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 hidden sm:inline">Accra & Ho, Ghana</span>
            </div>

            {/* Display Headline with generous line-height to guarantee NO text overlap */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-medium tracking-wide text-[#ff4d2e]">
                <AsteriskIcon className="w-3.5 h-3.5" color="#ff4d2e" />
                <span>Product Management · UI/UX · Software Delivery</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold font-display tracking-tight text-[#111317] leading-[1.14]">
                Hi, I'm Kingsley Kwasi Atitsogbe.
              </h1>

              <p className="text-xl sm:text-2xl lg:text-[26px] font-medium font-display text-slate-700 leading-snug tracking-tight">
                Turning user research, clinical workflows, and data into practical digital products.
              </p>
            </div>

            {/* One-line positioning description */}
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl">
              {PROFILE.oneLiner}
            </p>

            {/* Action Buttons & Direct Call Access */}
            <div className="space-y-5 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreProjects}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#111317] rounded-full hover:bg-[#ff4d2e] transition-all cursor-pointer shadow-lg shadow-black/10 hover:shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span>Explore Work Gallery</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Dual-Action CV Button: Direct Download + In-Browser Preview */}
                <div className="w-full sm:w-auto flex items-stretch rounded-full border border-slate-300 hover:border-[#111317] bg-white transition-all shadow-xs overflow-hidden min-h-[48px]">
                  <button
                    onClick={handleDownloadCv}
                    disabled={isDownloadingCv}
                    className="flex-1 sm:flex-initial px-5 py-3.5 text-sm font-semibold text-[#111317] hover:bg-slate-50 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    title="Download official Kingsley Kwasi Atitsogbe CV as PDF"
                  >
                    {cvDownloaded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">CV Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <span>{isDownloadingCv ? 'Generating PDF...' : 'Download CV'}</span>
                        <Download className="w-4 h-4 text-slate-600" />
                      </>
                    )}
                  </button>
                  <div className="w-[1px] bg-slate-200 self-stretch" />
                  <button
                    onClick={onOpenResume}
                    className="px-3.5 py-3.5 text-xs font-semibold text-slate-500 hover:text-[#ff4d2e] hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center"
                    title="Preview CV online in browser"
                  >
                    <span>Preview</span>
                  </button>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#ff4d2e] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Phone Lines Card */}
              <div className="p-3.5 sm:p-4 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xs max-w-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 bg-orange-50 text-[#ff4d2e] rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#ff4d2e]" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Lines</span>
                    <span className="font-bold text-slate-800">Calls & WhatsApp</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${PROFILE.phonePrimary}`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-[#ff4d2e] hover:text-white rounded-lg font-bold text-slate-800 transition-colors flex items-center gap-1.5"
                  >
                    <span>{PROFILE.phonePrimary}</span>
                    <span className="text-[10px] text-slate-500 hover:text-white font-normal">(Primary)</span>
                  </a>

                  <a
                    href={`tel:${PROFILE.phoneSecondary}`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-[#ff4d2e] hover:text-white rounded-lg font-bold text-slate-800 transition-colors flex items-center gap-1.5"
                  >
                    <span>{PROFILE.phoneSecondary}</span>
                    <span className="text-[10px] text-slate-500 hover:text-white font-normal">(Direct)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Portrait Frame with Photo Upload trigger */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-72 sm:w-88 lg:w-[400px] aspect-square flex items-center justify-center">
              {/* Rotating Asterisk Silhouette in Warm Red Behind Portrait */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110 z-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full opacity-90 drop-shadow-sm animate-[spin_40s_linear_infinite]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(50,50)">
                    {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                      <rect
                        key={i}
                        x="-6"
                        y="-48"
                        width="12"
                        height="96"
                        rx="6"
                        fill="none"
                        stroke="#ff4d2e"
                        strokeWidth="3"
                        transform={`rotate(${angle})`}
                      />
                    ))}
                  </g>
                </svg>
              </div>

              {/* Main Portrait Frame with user's unedited photo */}
              <div className="relative z-10 w-64 sm:w-76 lg:w-[320px] aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 group ring-1 ring-slate-200">
                <img
                  src={photoUrl}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Upload Hover Overlay */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black/65 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer p-4 text-center"
                  title="Click to select and use your exact photo without editing"
                >
                  <Camera className="w-8 h-8 mb-2 text-[#ff4d2e]" />
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">
                    Use Your Exact Photo
                  </span>
                  <span className="text-[10px] text-slate-300 font-sans mt-1">
                    Click to select unedited picture
                  </span>
                </div>
              </div>

              {/* Floating Highlight Badges */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-[#ff4d2e]" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Live Platform</div>
                  <div className="text-xs">GetVaxxed & Lafya AI</div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Test Suite</div>
                  <div className="text-xs">90% Coverage (JESI AI)</div>
                </div>
              </div>
            </div>

            {/* Hidden file input for uploading exact photo */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileChange}
              accept="image/*"
              className="hidden"
            />

            {/* Photo Action Helpers */}
            <div className="mt-5 flex items-center gap-3 text-xs font-mono">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-[#ff4d2e] hover:underline font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Exact Photo</span>
              </button>
              <span className="text-slate-300">·</span>
              <button
                onClick={resetPhoto}
                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Default</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
