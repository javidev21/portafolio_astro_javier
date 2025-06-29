import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  //This is for deployment for generate the sitemap by astro. But this is not my deployment site.
  // I use vercel for deployment, so I will not use this or Render
  site: 'https://porfolio.dev/'
})
