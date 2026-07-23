import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://aditya-nair-portfolio.pages.dev',
  output: "hybrid",
  adapter: cloudflare()
});