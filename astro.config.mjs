import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { alineaPlugin } from './src/lib/alinea-plugin.mjs';

export default defineConfig({
  site: 'https://covanoostveen.nl',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [alineaPlugin] }),
  },
});
