import Skill from './Skill'
import PreviewImage from './PreviewImage'

type Project = {
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

export default Project
