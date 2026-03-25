import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wellness.cellpowerx.com',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
