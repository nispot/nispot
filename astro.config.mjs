// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nispot.dev',
  integrations: [tailwind()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
  },
});
