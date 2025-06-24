import { Platform as PlatformType } from 'data/platform'

export type Platform = (typeof PlatformType)[keyof typeof PlatformType]
