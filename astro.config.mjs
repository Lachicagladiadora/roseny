import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://lcg-knowbud.netlify.app",
  integrations: [tailwind(), react(), icon()],
  output: "server",
  adapter: netlify()
});