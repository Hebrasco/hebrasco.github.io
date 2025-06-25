import { PROJECT_STATUS } from 'data/projectStatus'
import { ProjectStatusType } from 'types/ProjectStatusType'

export type ProjectStatus =
  | {
      type: Exclude<ProjectStatusType, 'Coming Soon'>
      date: Date
    }
  | {
      type: typeof PROJECT_STATUS.comingSoon
      date?: never
    }
