import { PreviewImage } from './PreviewImage'
import { Skill } from './Skill'

export type Project = {
  name: string
  description: string
  tasks: readonly string[]
  languages: readonly Skill[]
  frameworks: readonly Skill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: readonly PreviewImage[]
  isComingSoon: boolean
}
