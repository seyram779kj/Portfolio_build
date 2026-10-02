import { useState, useEffect } from 'react';
import { PROFILE } from '../data/portfolioData';

const STORAGE_KEY = 'kingsley_custom_avatar_data_url';

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    }
    return PROFILE.photo;
  });

  const handleFileUpload = (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        localStorage.setItem(STORAGE_KEY, result);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(PROFILE.photo);
  };

  return { photoUrl, handleFileUpload, resetPhoto };
}
