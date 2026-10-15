import type { Project } from 'types'
import type { ProjectTheme, ThemeColor } from 'types/ProjectTheme'

const DEFAULT_TEXT_SECONDARY_ALPHA: ThemeColor = { dark: '64%', light: '68%' }

function lightDark(color: ThemeColor): string {
  return `light-dark(${color.light}, ${color.dark})`
}

function getThemeDeclarations(theme: ProjectTheme): string[] {
  const textSecondaryAlpha = theme.textSecondaryAlpha ?? DEFAULT_TEXT_SECONDARY_ALPHA

  return [
    `--color-background: ${lightDark(theme.background)}`,
    `--color-background-secondary: ${lightDark(theme.backgroundSecondary)}`,
    `--color-text: ${lightDark(theme.text)}`,
    `--color-accent: ${lightDark(theme.accent)}`,
    `--color-on-accent: ${lightDark(theme.onAccent)}`,
    `--color-accent-text: ${lightDark(theme.accentText)}`,
    `--color-text-secondary-alpha-light: ${textSecondaryAlpha.light}`,
    `--color-text-secondary-alpha-dark: ${textSecondaryAlpha.dark}`,
  ]
}

function getThemeId(project: Project): string {
  return `theme-${project.id}`
}

function getThemeClass(project: Project): string {
  return `theme ${getThemeId(project)}`
}

function getProjectThemesCss(projects: readonly Project[]): string {
  return projects
    .map(
      (project) => `.${getThemeId(project)} { ${getThemeDeclarations(project.theme).join('; ')}; }`
    )
    .join('\n')
}

export { getProjectThemesCss, getThemeClass }
