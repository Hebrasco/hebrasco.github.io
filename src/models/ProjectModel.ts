import IProject from 'interfaces/IProject'
import ISkill from 'interfaces/ISkill'
import PreviewImage from './PreviewImageModel'

export default class ProjectModel implements IProject {
  name: string
  description: string
  tasks: string[]
  languages: ISkill[]
  frameworks: ISkill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: PreviewImage[]
  isComingSoon: boolean

  constructor(
    name: string,
    description: string,
    tasks: string[],
    languages: ISkill[],
    frameworks: ISkill[],
    onlineURL?: string,
    sourceURL?: string,
    previewImages?: PreviewImage[],
    isComingSoon: boolean = false
  ) {
    this.name = name
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineURL = onlineURL
    this.sourceURL = sourceURL
    this.previewImages = previewImages
    this.isComingSoon = isComingSoon
  }
}