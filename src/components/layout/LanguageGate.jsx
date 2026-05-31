export default function LanguageGate({ onSelect }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-6">
      <div className="w-full max-w-md rounded-lg bg-white px-8 py-10 text-center shadow-card">
        <h1 className="text-2xl font-bold text-black">
          Choose your language
          <span className="mt-1 block text-lg font-semibold text-dark">
            Choisissez votre langue
          </span>
        </h1>
        <p className="mt-3 text-sm text-muted">
          Select a language to view the portfolio
          <span className="block">Sélectionnez une langue pour voir le portfolio</span>
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => onSelect('en')}
            className="nav-pill px-8 py-3 text-base"
          >
            English
          </button>
          <button
            type="button"
            onClick={() => onSelect('fr')}
            className="resume-btn px-8 py-3"
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
}
