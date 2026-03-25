import en from './en.json';
import pt from './pt.json';

const translations: Record<string, typeof en> = { en, pt };

export function t(locale: string) {
  return translations[locale] || translations.en;
}

export function getLocaleFromUrl(url: URL): string {
  const [, locale] = url.pathname.split('/');
  if (locale === 'pt') return 'pt';
  return 'en';
}

export function getPathForLocale(path: string, locale: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'pt') {
    segments[0] = locale;
  }
  return '/' + segments.join('/');
}

export const localeRoutes: Record<string, Record<string, string>> = {
  en: {
    home: '/en/',
    about: '/en/about',
    treatments: '/en/treatments',
    contact: '/en/contact',
  },
  pt: {
    home: '/pt/',
    about: '/pt/sobre',
    treatments: '/pt/tratamentos',
    contact: '/pt/contacto',
  },
};
