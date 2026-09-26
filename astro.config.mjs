import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getAlternateUrl, getRouteKey } from './src/i18n/utils.ts';

const site = 'https://wellnesscenter.cellpowerx.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [
    sitemap({
      // '/' only redirects to '/en/'
      filter: (page) => page !== `${site}/`,
      // EN and PT slugs differ, so pair alternates through localeRoutes
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (getRouteKey(path)) {
          item.links = [
            { lang: 'en', url: getAlternateUrl(path, 'en', site) },
            { lang: 'pt', url: getAlternateUrl(path, 'pt', site) },
            { lang: 'x-default', url: getAlternateUrl(path, 'en', site) },
          ];
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
