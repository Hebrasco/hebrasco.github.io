import { Project } from 'types'

export { CONFIG } from './config'
export * as MISC from './misc'
export * as PROFILE from './profile'
export { ROUTES } from './routes'

export const PROJECTS: Project[] = Object.values(require('./projects'))
