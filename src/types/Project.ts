import { Feature } from 'types/Feature'
import { PreviewImage } from './PreviewImage'
import { Skill } from './Skill'
import AppIcon from './AppIcon'

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
  isComingSoon: boolean
}
