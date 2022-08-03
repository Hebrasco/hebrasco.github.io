import Language from 'models/LanguageModel'

export const LANGUAGES = {
  swift: new Language('Swift'),
  cSharp: new Language('C#'),
  typeScript: new Language('TypeScript'),
  javaScript: new Language('JavaScript'),
  html: new Language('HTML'),
  css: new Language('CSS'),
  json: new Language('JSON'),
  metal: new Language('MSL'),
} as const
