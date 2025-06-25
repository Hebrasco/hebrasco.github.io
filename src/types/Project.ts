import { Feature } from 'types/Feature'
import { PreviewImage } from './PreviewImage'
import { Skill } from './Skill'
import { AppIcon } from './AppIcon'
import { Platform } from './Platform'
import { ProjectStatus } from 'types/ProjectStatus'
import { Screenshots } from 'types/Screenshots'

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
  screenshots?: Screenshots
  platforms: readonly Platform[]
}
