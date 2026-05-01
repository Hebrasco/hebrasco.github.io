import type { PLATFORM } from 'data/platform'
import type { AppIcon } from 'types/AppIcon'
import type { Feature } from 'types/Feature'
import type { Platform } from 'types/Platform'
import type { ProjectStatus } from 'types/ProjectStatus'
import type { Screenshot } from 'types/Screenshot'
import type { Skill } from 'types/Skill'

type Project = {
  id: string
  name: string
  description: string
  summaryHeading: string
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
  screenshots: {
    [K in keyof typeof PLATFORM]?: Screenshot[]
  }
  platforms: readonly Platform[]
}

export type { Project }
