import { BLOOM as bloom } from 'data/projects/Bloom'
import { INSTERS as insters } from 'data/projects/Insters'
import { INVEST_CALC as investCalc } from 'data/projects/InvestCalc'
import { RECIPES as recipes } from 'data/projects/Recipes'
import { UMBRELLA as umbrella } from 'data/projects/Umbrella'
import type { Project } from 'types'

export const PROJECTS: Project[] = [investCalc, bloom, umbrella, insters, recipes]
