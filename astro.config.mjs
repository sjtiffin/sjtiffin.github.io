// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sjtiffin.github.io',
  base: 'sjtiffin.github.io',
  integrations: [tailwind()]
});