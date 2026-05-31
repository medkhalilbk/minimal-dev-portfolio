export const LOCALE_KEY = 'portfolio-locale';
export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'fr'];

export function getStoredLocale() {
  const stored = localStorage.getItem(LOCALE_KEY);
  return SUPPORTED_LOCALES.includes(stored) ? stored : null;
}

export function setStoredLocale(locale) {
  localStorage.setItem(LOCALE_KEY, locale);
}
