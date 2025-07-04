import type { PLATFORM } from 'data/platform'

type Platform = (typeof PLATFORM)[keyof typeof PLATFORM]

export type { Platform }
