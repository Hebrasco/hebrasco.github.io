import { LanguageCollection } from 'types'

export const LANGUAGES: LanguageCollection = {
  swift: { name: 'Swift' },
  cSharp: { name: 'C#' },
  typeScript: { name: 'TypeScript' },
  javaScript: { name: 'JavaScript' },
  html: { name: 'HTML' },
  css: { name: 'CSS' },
  json: { name: 'JSON' },
  metal: { name: 'MSL' },
} as const
