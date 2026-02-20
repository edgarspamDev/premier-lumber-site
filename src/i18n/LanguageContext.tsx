import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language } from './translations';
import { translations } from './translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('premier-lang');
    if (saved === 'es' || saved === 'en') return saved;
    // Auto-detect browser language
    const browserLang = navigator.language || '';
    return browserLang.startsWith('es') ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('premier-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  }, []);

  const t = useCallback((section: string, key: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sectionData = (translations as any)[section];
    if (!sectionData) return key;
    
    // Support dot notation: t('products', 'pallets.title')
    const parts = key.split('.');
    let entry = sectionData;
    for (const part of parts) {
      entry = entry?.[part];
      if (!entry) return key;
    }
    
    return entry[language] || entry['en'] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
