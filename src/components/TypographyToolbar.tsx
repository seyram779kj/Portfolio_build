import React, { useState } from 'react';
import { Type, Check, X } from 'lucide-react';
import { useTypography } from '../utils/useTypography';

export const TypographyToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activePairing, allPairings, setPairing } = useTypography();

  return (
    <>
      {/* Floating Quiet Typography Trigger Button */}
      <aside aria-label="Font settings" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Customize typography and fonts"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111317] text-white shadow-xl shadow-slate-900/20 hover:bg-[#ff4d2e] transition-all duration-200 text-xs font-semibold cursor-pointer border border-white/10 active:scale-95 group"
        >
          <Type className="w-3.5 h-3.5 text-orange-400 group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">Fonts:</span>
          <span className="text-orange-200 group-hover:text-white font-medium">
            {activePairing.displayFont}
          </span>
        </button>
      </aside>

      {/* Typography Selector Modal / Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Typography settings"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 bg-orange-100 text-[#ff4d2e] rounded-lg">
                  <Type className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-none">
                    Portfolio Typography System
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a curated font pairing tailored for product design
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close font settings"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Font Pairings List */}
            <div className="p-4 space-y-2.5 max-h-[60vh] overflow-y-auto">
              {allPairings.map((pairing) => {
                const isActive = pairing.id === activePairing.id;
                return (
                  <button
                    key={pairing.id}
                    onClick={() => {
                      setPairing(pairing.id);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? 'border-[#ff4d2e] bg-orange-50/40 ring-1 ring-[#ff4d2e]'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-base font-bold text-slate-900"
                          style={{ fontFamily: pairing.displayFamilyCss }}
                        >
                          {pairing.name}
                        </span>
                        {isActive && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#ff4d2e] text-white">
                            Active
                          </span>
                        )}
                      </div>
                      <p
                        className="text-xs text-slate-500 line-clamp-1"
                        style={{ fontFamily: pairing.bodyFamilyCss }}
                      >
                        {pairing.description}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                        <span className="font-medium text-slate-600">Display:</span> {pairing.displayFont}
                        <span>·</span>
                        <span className="font-medium text-slate-600">Body:</span> {pairing.bodyFont}
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-[#ff4d2e] text-white'
                          : 'border border-slate-300 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer with note */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Your font selection is saved automatically</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#111317] hover:bg-[#ff4d2e] rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
