import Project from 'models/ProjectModel'
import Recipes from 'data/projects/Recipes'
import Bloom from 'data/projects/Bloom'
import Insters from 'data/projects/Insters'
import Umbrella from 'data/projects/Umbrella'

export const PROJECTS: readonly Project[] = [
  Umbrella,
  Insters,
  Bloom,
  Recipes,
] as const
