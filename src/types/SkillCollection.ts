import type { Skill } from 'types/Skill'

type SkillCollection = {
  applications: readonly Skill[]
  frameworks: readonly Skill[]
  languages: readonly Skill[]
}

export type { SkillCollection }
