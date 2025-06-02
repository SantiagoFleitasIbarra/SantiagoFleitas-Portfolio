"use client";

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Locale>('es'); // Default to Spanish

  useEffect(() => {
    // You could add logic here to load saved language preference from localStorage
    const savedLang = localStorage.getItem('portfolio-lang') as Locale | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };
  
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key.toString();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
