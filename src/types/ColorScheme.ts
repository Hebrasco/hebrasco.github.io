import type { COLOR_SCHEMES } from 'data/misc/colorSchemes'

type ColorScheme = (typeof COLOR_SCHEMES)[keyof typeof COLOR_SCHEMES]

export type { ColorScheme }
