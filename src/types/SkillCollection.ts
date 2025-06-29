import type { Skill } from './Skill'

export type SkillCollection = {
  applications: readonly Skill[]
  frameworks: readonly Skill[]
  languages: readonly Skill[]
}
