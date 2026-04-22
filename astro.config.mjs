import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  fonts: [
    {
      cssVariable: '--font-nunito',
      fallbacks: [
        '-apple-system',
        'SF Pro Display',
        'SF Pro Text',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      name: 'Nunito',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Nunito.ttf'],
            style: 'normal',
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  output: 'static',
  site: 'https://hebrasco.github.io',
})
