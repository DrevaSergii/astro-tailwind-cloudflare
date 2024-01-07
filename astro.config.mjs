import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind({})],
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
    },
  }),
});
