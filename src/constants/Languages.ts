import { BADGE_VARIANTS } from './BadgeVariants'
import Language from 'models/LanguageModel'

export const LANGUAGES = {
  swift: new Language('Swift', BADGE_VARIANTS.primary),
  cSharp: new Language('C#', BADGE_VARIANTS.dark),
  typeScript: new Language('TypeScript', BADGE_VARIANTS.success),
  javaScript: new Language('JavaScript', BADGE_VARIANTS.success),
  html: new Language('HTML', BADGE_VARIANTS.success),
  css: new Language('CSS', BADGE_VARIANTS.success),
  json: new Language('JSON', BADGE_VARIANTS.primary),
}
