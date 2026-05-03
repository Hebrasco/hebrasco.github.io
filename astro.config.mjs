import { defineConfig, sharpImageService } from 'astro/config'

export default defineConfig({
  image: {
    service: sharpImageService(),
  },
  output: 'static',
  site: 'https://hebrasco.github.io',
})
