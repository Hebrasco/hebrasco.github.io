import type { PROJECT_STATUS } from 'data'
import type { ProjectStatusType } from 'types/ProjectStatusType'

type ProjectStatus =
  | {
      type: Exclude<ProjectStatusType, 'Coming Soon'>
      date: Date
    }
  | {
      type: typeof PROJECT_STATUS.comingSoon
      date?: never
    }

export type { ProjectStatus }
