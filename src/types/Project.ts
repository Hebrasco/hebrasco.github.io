import { Feature } from './Feature'
import { PreviewImage } from './PreviewImage'
import { Skill } from './Skill'
import { AppIcon } from './AppIcon'
import { Platform } from './Platform'
import { ProjectStatus } from './ProjectStatus'
import { Screenshot } from './Screenshot'

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
  previewImages: readonly PreviewImage[]
  previewImageMain: PreviewImage
  status: ProjectStatus
  screenshots?: {
    light: readonly Screenshot[]
    dark: readonly Screenshot[]
  }
  platforms: readonly Platform[]
}
