import { PLATFORM } from 'data/platform'

export type Platform = (typeof PLATFORM)[keyof typeof PLATFORM]
