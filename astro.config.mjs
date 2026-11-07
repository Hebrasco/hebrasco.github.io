import sitemap from '@astrojs/sitemap'
import { defineConfig, sharpImageService } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404') })],
  output: 'static',
  site: 'https://daniel-bedrich.dev',
  trailingSlash: 'never',
})
