const DATA_BASE = '/data';

const cache = new Map();

function cacheKey(locale, filename) {
  return `${locale}/${filename}`;
}

async function fetchJson(locale, filename) {
  const key = cacheKey(locale, filename);

  if (cache.has(key)) {
    return cache.get(key);
  }

  const response = await fetch(`${DATA_BASE}/${locale}/${filename}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${locale}/${filename}: ${response.statusText}`);
  }

  const data = await response.json();
  cache.set(key, data);
  return data;
}

export function clearDataCache() {
  cache.clear();
}

export async function getAllPortfolioData(locale = 'en') {
  const [navigation, hero, experience, projects, skills, education, contact, ui] =
    await Promise.all([
      fetchJson(locale, 'navigation.json'),
      fetchJson(locale, 'hero.json'),
      fetchJson(locale, 'experience.json'),
      fetchJson(locale, 'projects.json'),
      fetchJson(locale, 'skills.json'),
      fetchJson(locale, 'education.json'),
      fetchJson(locale, 'contact.json'),
      fetchJson(locale, 'ui.json'),
    ]);

  return {
    navigation,
    hero,
    experience,
    projects,
    skills,
    education,
    contact,
    ui,
  };
}
