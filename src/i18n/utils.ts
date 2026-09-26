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

// Built pages are served as directories, so canonical/hreflang/sitemap URLs end in '/'
const withTrailingSlash = (p: string) => (p.endsWith('/') ? p : p + '/');

export function getRouteKey(currentPath: string): { locale: string; key: string } | null {
  const clean = currentPath.replace(/\/$/, '') || '/';
  for (const locale of ['en', 'pt']) {
    for (const [key, path] of Object.entries(localeRoutes[locale])) {
      if (clean === (path.replace(/\/$/, '') || '/')) return { locale, key };
    }
  }
  return null;
}

export function getAlternateUrl(currentPath: string, targetLocale: string, siteBase: string): string {
  const match = getRouteKey(currentPath);
  const path = match ? localeRoutes[targetLocale][match.key] : currentPath;
  return siteBase + withTrailingSlash(path);
}

export const localeRoutes: Record<string, Record<string, string>> = {
  en: {
    home: '/en/',
    about: '/en/about',
    treatments: '/en/services',
    contact: '/en/contact',
    ourScience: '/en/our-science',
    privacy: '/en/privacy',
    terms: '/en/terms',
  },
  pt: {
    home: '/pt/',
    about: '/pt/sobre',
    treatments: '/pt/servicos',
    contact: '/pt/contacto',
    ourScience: '/pt/nossa-ciencia',
    privacy: '/pt/privacidade',
    terms: '/pt/termos',
  },
};
