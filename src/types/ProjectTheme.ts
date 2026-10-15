type ThemeColor = {
  light: string
  dark: string
}

type ProjectTheme = {
  background: ThemeColor
  backgroundSecondary: ThemeColor
  text: ThemeColor
  accent: ThemeColor
  onAccent: ThemeColor
  accentText: ThemeColor
  textSecondaryAlpha?: ThemeColor
}

export type { ProjectTheme, ThemeColor }
