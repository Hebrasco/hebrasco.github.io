import Project from 'models/ProjectModel'
import Recipes from 'constants/projects/Recipes'
import Bloom from 'constants/projects/Bloom'
import Insters from 'constants/projects/Insters'
import Umbrella from 'constants/projects/Umbrella'

export const PROJECTS: readonly Project[] = [
  Umbrella,
  Insters,
  Bloom,
  Recipes,
] as const
