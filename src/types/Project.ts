import { PreviewImage } from './PreviewImage'
import { Skill } from './Skill'

export type Project = {
  id: string
  name: string
  description: string
  tasks: readonly string[]
  languages: readonly Skill[]
  frameworks: readonly Skill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: readonly PreviewImage[]
  isComingSoon: boolean
  previewColors: {
    backgroundGradient: {
      start: string
      end: string
    }
    title: string
    subtitle: string
    actions: {
      foreground: string
      background: string
    }
  }
}
