import type { PLATFORM } from 'data/platform'
import type { AppIcon } from './AppIcon'
import type { Feature } from './Feature'
import type { Platform } from './Platform'
import type { ProjectStatus } from './ProjectStatus'
import type { Skill } from './Skill'
import type { Screenshot } from 'types/Screenshot'

type Project = {
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
  titleImage: Screenshot
  previewImage: Screenshot
  status: ProjectStatus
  screenshots?: {
    [K in keyof typeof PLATFORM]?: Screenshot[]
  }
  platforms: readonly Platform[]
}

export type { Project }
