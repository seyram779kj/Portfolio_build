import { useState, useEffect } from 'react';

export interface FontPairing {
  id: string;
  name: string;
  description: string;
  displayFont: string;
  bodyFont: string;
  monoFont: string;
  displayFamilyCss: string;
  bodyFamilyCss: string;
  monoFamilyCss: string;
  sampleTitle: string;
}

export const FONT_PAIRINGS: FontPairing[] = [
  {
    id: 'bricolage-jakarta',
    name: 'Bricolage & Jakarta',
    description: 'Contemporary & Editorial — Punchy character with ultra-clean body legibility',
    displayFont: 'Bricolage Grotesque',
    bodyFont: 'Plus Jakarta Sans',
    monoFont: 'JetBrains Mono',
    displayFamilyCss: "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
    bodyFamilyCss: "'Plus Jakarta Sans', -apple-system, sans-serif",
    monoFamilyCss: "'JetBrains Mono', monospace",
    sampleTitle: 'Kingsley Kwasi Atitsogbe',
  },
  {
    id: 'syne-jakarta',
    name: 'Syne & Jakarta',
    description: 'Modernist Geometric — Bold architectural display with smooth geometry',
    displayFont: 'Syne',
    bodyFont: 'Plus Jakarta Sans',
    monoFont: 'JetBrains Mono',
    displayFamilyCss: "'Syne', 'Plus Jakarta Sans', sans-serif",
    bodyFamilyCss: "'Plus Jakarta Sans', -apple-system, sans-serif",
    monoFamilyCss: "'JetBrains Mono', monospace",
    sampleTitle: 'Kingsley Kwasi Atitsogbe',
  },
  {
    id: 'outfit-jakarta',
    name: 'Outfit & Jakarta',
    description: 'Clean Tech & Product — Modern SaaS and Silicon Valley product feel',
    displayFont: 'Outfit',
    bodyFont: 'Plus Jakarta Sans',
    monoFont: 'JetBrains Mono',
    displayFamilyCss: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    bodyFamilyCss: "'Plus Jakarta Sans', -apple-system, sans-serif",
    monoFamilyCss: "'JetBrains Mono', monospace",
    sampleTitle: 'Kingsley Kwasi Atitsogbe',
  },
  {
    id: 'space-jakarta',
    name: 'Space Grotesk & Jakarta',
    description: 'Technical & Engineering — Neo-grotesk monospace-inspired flair',
    displayFont: 'Space Grotesk',
    bodyFont: 'Plus Jakarta Sans',
    monoFont: 'JetBrains Mono',
    displayFamilyCss: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    bodyFamilyCss: "'Plus Jakarta Sans', -apple-system, sans-serif",
    monoFamilyCss: "'JetBrains Mono', monospace",
    sampleTitle: 'Kingsley Kwasi Atitsogbe',
  },
  {
    id: 'instrument-jakarta',
    name: 'Instrument Sans & Jakarta',
    description: 'Swiss Minimalist — Pure proportion, calm clarity, and quiet precision',
    displayFont: 'Instrument Sans',
    bodyFont: 'Plus Jakarta Sans',
    monoFont: 'JetBrains Mono',
    displayFamilyCss: "'Instrument Sans', 'Plus Jakarta Sans', sans-serif",
    bodyFamilyCss: "'Plus Jakarta Sans', -apple-system, sans-serif",
    monoFamilyCss: "'JetBrains Mono', monospace",
    sampleTitle: 'Kingsley Kwasi Atitsogbe',
  },
];

const STORAGE_KEY = 'portfolio_font_pairing_id';

export function useTypography() {
  const [currentPairingId, setCurrentPairingId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && FONT_PAIRINGS.some((p) => p.id === saved)) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'bricolage-jakarta';
  });

  const activePairing =
    FONT_PAIRINGS.find((p) => p.id === currentPairingId) || FONT_PAIRINGS[0];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-display', activePairing.displayFamilyCss);
    root.style.setProperty('--font-sans', activePairing.bodyFamilyCss);
    root.style.setProperty('--font-mono', activePairing.monoFamilyCss);
    try {
      localStorage.setItem(STORAGE_KEY, activePairing.id);
    } catch {
      // ignore
    }
  }, [activePairing]);

  const setPairing = (id: string) => {
    if (FONT_PAIRINGS.some((p) => p.id === id)) {
      setCurrentPairingId(id);
    }
  };

  return {
    activePairing,
    allPairings: FONT_PAIRINGS,
    setPairing,
  };
}
