import { useEffect, useState } from 'react';
import { clearDataCache, getAllPortfolioData } from './services/dataService';
import { getStoredLocale, setStoredLocale } from './i18n/locale';
import { LanguageProvider } from './context/LanguageContext';
import LanguageGate from './components/layout/LanguageGate';
import LanguageSwitcher from './components/layout/LanguageSwitcher';
import ResumeHeader from './components/layout/ResumeHeader';
import Summary from './components/sections/Summary';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import LoadingSpinner from './components/ui/LoadingSpinner';

function PortfolioContent({ portfolio, ui }) {
  return (
    <div className="page-wrap">
      <LanguageSwitcher label={ui.labels.language} />
      <ResumeHeader profile={portfolio.hero} navigation={portfolio.navigation} />
      <main>
        <Summary data={portfolio.hero} />
        <Skills data={portfolio.skills} />
        <Experience data={portfolio.experience} />
        <Education data={portfolio.education} />
        <Projects data={portfolio.projects} ui={ui} />
        <Contact data={portfolio.contact} />
      </main>
    </div>
  );
}

export default function App() {
  const [locale, setLocaleState] = useState(() => getStoredLocale());
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setLocale = (nextLocale) => {
    clearDataCache();
    setStoredLocale(nextLocale);
    setLocaleState(nextLocale);
    setPortfolio(null);
    setError(null);
  };

  useEffect(() => {
    if (!locale) return;

    setLoading(true);
    getAllPortfolioData(locale)
      .then(setPortfolio)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale || 'en';
  }, [locale]);

  if (!locale) {
    return <LanguageGate onSelect={setLocale} />;
  }

  if (loading || !portfolio) return <LoadingSpinner />;

  if (error) {
    return (
      <LanguageProvider locale={locale} setLocale={setLocale}>
        <div className="flex min-h-screen items-center justify-center bg-page px-6">
          <p className="text-center text-sm text-muted">
            Failed to load portfolio: {error}
          </p>
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider locale={locale} setLocale={setLocale}>
      <PortfolioContent portfolio={portfolio} ui={portfolio.ui} />
    </LanguageProvider>
  );
}
