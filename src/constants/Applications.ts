import { BADGE_VARIANTS } from './BadgeVariants'
import Application from 'models/ApplicationModal'

export const APPLICATIONS = {
  xcode: new Application('Xcode', BADGE_VARIANTS.primary),
  gitTower: new Application('GitTower', BADGE_VARIANTS.primary),
  gitHub: new Application('GitHub', BADGE_VARIANTS.primary),
  gitLab: new Application('GitLab', BADGE_VARIANTS.secondary),
  androidStudio: new Application('Android Studio', BADGE_VARIANTS.secondary),
  intellijIdea: new Application('IntelliJ IDEA', BADGE_VARIANTS.secondary),
  vsCode: new Application('VS Code', BADGE_VARIANTS.success),
  vs: new Application('Visual Studio', BADGE_VARIANTS.dark),
  unity: new Application('Unity', BADGE_VARIANTS.dark),
  threeDsMax: new Application('3DS Max', BADGE_VARIANTS.warning),
  maya: new Application('Maya', BADGE_VARIANTS.warning),
}
