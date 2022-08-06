import { Bloom, Insters, Recipes, Umbrella } from 'data/projects'
import { Project } from 'types'

export const PROJECTS: readonly Project[] = [
  Umbrella,
  Insters,
  Bloom,
  Recipes,
] as const
