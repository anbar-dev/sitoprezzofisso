import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://sitoprezzofisso.it',
  integrations: [sitemap({ filter: (page) => !page.includes('/demo/') })],
});
