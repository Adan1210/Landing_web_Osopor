import es from "./es.json";
import en from "./en.json";
import zh from "./zh.json";

export const TRANSLATIONS = { es, en, zh };
export const CATEGORIES = { es: es.categories, en: en.categories, zh: zh.categories };
export const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
export const DEFAULT_LANG = "es";

const LANG_STORAGE_KEY = "osopor-lang";

// Language choice must survive full page navigations (this is now a
// multi-page site), so it's persisted in localStorage instead of memory.
export function getLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (e) {
    // localStorage unavailable (privacy mode, etc.) — fall back silently
  }
  return DEFAULT_LANG;
}

export function setLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    // ignore
  }
}
