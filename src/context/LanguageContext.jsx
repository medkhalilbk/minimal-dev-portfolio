import { createContext, useContext } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ locale, setLocale, children }) {
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
