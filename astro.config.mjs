import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shockapools.com',
  integrations: [sitemap()],
  trailingSlash: 'ignore'
});
