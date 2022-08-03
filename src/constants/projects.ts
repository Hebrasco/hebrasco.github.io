import Project from 'models/ProjectModel'
import Recipes from './projects/Recipes'
import Bloom from './projects/Bloom'
import Insters from './projects/Insters'
import Umbrella from './projects/Umbrella'

export const PROJECTS: readonly Project[] = [
  Umbrella,
  Insters,
  Bloom,
  Recipes,
] as const
