import { Project } from 'types'
import { BLOOM as bloom } from './Bloom'
import { INSTERS as insters } from './Insters'
import { RECIPES as recipes } from './Recipes'
import { UMBRELLA as umbrella } from './Umbrella'
import { INVEST_CALC as investCalc } from './InvestCalc'

export const PROJECTS: Project[] = [
  investCalc,
  bloom,
  umbrella,
  insters,
  recipes,
]
