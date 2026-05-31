import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher({ label }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="mb-6 flex items-center justify-center gap-2 text-sm">
      <span className="text-muted">{label}:</span>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded px-2 py-0.5 font-medium transition-colors ${
          locale === 'en'
            ? 'bg-linkedin text-white'
            : 'text-dark hover:text-linkedin'
        }`}
      >
        EN
      </button>
      <span className="text-muted">|</span>
      <button
        type="button"
        onClick={() => setLocale('fr')}
        className={`rounded px-2 py-0.5 font-medium transition-colors ${
          locale === 'fr'
            ? 'bg-linkedin text-white'
            : 'text-dark hover:text-linkedin'
        }`}
      >
        FR
      </button>
    </div>
  );
}
