import type { Skill } from './Skill'

type SkillCollection = {
  applications: readonly Skill[]
  frameworks: readonly Skill[]
  languages: readonly Skill[]
}

export type { SkillCollection }
