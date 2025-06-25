import { PROJECT_STATUS } from 'data/projectStatus'

export type ProjectStatusType =
  (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS]
