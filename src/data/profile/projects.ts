import { PROJECTS as PROFILE_PROJECTS } from 'data'
import { Project } from 'types'

export const PROJECTS: readonly Project[] = [
  PROFILE_PROJECTS.umbrella,
  PROFILE_PROJECTS.insters,
  PROFILE_PROJECTS.bloom,
  PROFILE_PROJECTS.recipes,
] as const
