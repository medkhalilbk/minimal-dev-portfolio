# Khalil Benkhelil — Portfolio

A minimal, bilingual (English / French) resume-style portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

On first visit, choose **English** or **Français**. The choice is saved in your browser.

## Languages

Content lives in locale folders:

```
public/data/en/   ← English
public/data/fr/   ← French
```

Each folder contains the same files: `hero.json`, `experience.json`, `skills.json`, etc.

**Resume PDFs** — place both files in `public/`:

- `public/resume-en.pdf` — English CV (shown when EN is selected)
- `public/resume-fr.pdf` — French CV (shown when FR is selected)

To edit copy, update the matching file in both languages.

## Structure

```
public/data/
  en/ & fr/         ← all translatable content
  ui.json           ← labels (Stack, Visit site, etc.)
src/
  i18n/locale.js    ← language storage
  context/          ← LanguageContext
  components/
    layout/LanguageGate.jsx
    layout/LanguageSwitcher.jsx
  services/dataService.js
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
