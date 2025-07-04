import type { PROJECT_STATUS } from 'data'

type ProjectStatusType = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS]

export type { ProjectStatusType }
