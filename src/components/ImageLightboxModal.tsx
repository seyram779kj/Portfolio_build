import React, { useEffect } from 'react';
import { Camera, X } from 'lucide-react';
import { ProjectGalleryImage } from '../types/portfolio';

interface ImageLightboxModalProps {
  image: ProjectGalleryImage | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#ff4d2e] rounded-full transition-colors cursor-pointer flex items-center gap-1.5 min-h-[38px]"
          aria-label="Close lightbox"
        >
          <span>Close</span>
          <X className="w-4 h-4" />
        </button>

        {/* Image / Placeholder Container */}
        <div className="relative w-full max-h-[75vh] overflow-hidden rounded-xl border border-white/10 bg-[#0e1017] flex items-center justify-center shadow-2xl">
          {image.isPlaceholder || image.url.startsWith('[ADD') ? (
            <div className="w-full aspect-[16/9] min-h-[320px] flex flex-col items-center justify-center p-8 text-center bg-radial from-slate-900 to-black text-slate-300 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4d2e]">
                <Camera className="w-8 h-8 text-[#ff4d2e]" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-wider block uppercase">
                  Design & Workflow Showcase
                </span>
                <p className="text-base font-medium font-sans text-white max-w-md mx-auto">
                  {image.caption}
                </p>
                <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto pt-1">
                  Full fidelity designs, PRD specifications, and interactive prototypes available upon request.
                </p>
              </div>
            </div>
          ) : (
            <img
              src={image.url}
              alt={image.caption}
              className="max-h-[75vh] w-auto object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Caption */}
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-xs sm:text-sm font-sans text-slate-200 text-center max-w-3xl">
          {image.caption}
        </div>
      </div>
    </div>
  );
};
