import { BADGE_VARIANTS } from './BadgeVariants'
import Application from 'models/ApplicationModal'

export const APPLICATIONS = {
  xcode: new Application('Xcode', BADGE_VARIANTS.primary),
  gitTower: new Application('GitTower', BADGE_VARIANTS.primary),
  gitHub: new Application('GitHub', BADGE_VARIANTS.primary),
  vsCode: new Application('VS Code', BADGE_VARIANTS.success),
  vs: new Application('Visual Studio', BADGE_VARIANTS.dark),
}
