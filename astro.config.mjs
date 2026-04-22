import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-varela',
      fallbacks: ['sans serif'],
      name: 'Varela',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/VarelaRound-Regular.ttf'],
            style: 'normal',
            weight: 'regular',
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  output: 'static',
  site: 'https://hebrasco.github.io',
})
