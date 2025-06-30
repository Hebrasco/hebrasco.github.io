import type { PreviewImage } from 'types/PreviewImage'
import type { ScreenshotSet } from 'types/ScreenshotSet'
import type { TitleImage } from 'types/TitleImage'
import type { AppIcon } from './AppIcon'
import type { Feature } from './Feature'
import type { Platform } from './Platform'
import type { ProjectStatus } from './ProjectStatus'
import type { Skill } from './Skill'

export type Project = {
  id: string
  name: string
  description: string
  tasks: readonly string[]
  languages: readonly Skill[]
  frameworks: readonly Skill[]
  features: readonly Feature[]
  onlineURL?: string
  sourceURL?: string
  appIcon?: AppIcon
  titleImage: TitleImage
  previewImage: PreviewImage
  status: ProjectStatus
  screenshots?: {
    iphone?: ScreenshotSet
    ipad?: ScreenshotSet
    mac?: ScreenshotSet
    web?: ScreenshotSet
  }
  platforms: readonly Platform[]
}
