import { defineConfig, sharpImageService } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  image: {
    service: sharpImageService(),
  },
  output: 'static',
  site: 'https://daniel-bedrich.dev',
  trailingSlash: 'never',
})
