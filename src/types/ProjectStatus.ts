import type { PROJECT_STATUS } from 'data/projectStatus'
import type { ProjectStatusType } from 'types/ProjectStatusType'

export type ProjectStatus =
  | {
      type: Exclude<ProjectStatusType, 'Coming Soon'>
      date: Date
    }
  | {
      type: typeof PROJECT_STATUS.comingSoon
      date?: never
    }
