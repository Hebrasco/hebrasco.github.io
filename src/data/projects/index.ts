import { BLOOM as bloom } from './Bloom'
import { INSTERS as insters } from './Insters'
import { INVEST_CALC as investCalc } from './InvestCalc'
import { RECIPES as recipes } from './Recipes'
import { UMBRELLA as umbrella } from './Umbrella'
import type { Project } from 'types'

export const PROJECTS: Project[] = [investCalc, bloom, umbrella, insters, recipes]
