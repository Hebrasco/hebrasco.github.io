import { ProjectBadge as Badge } from 'pages/Home/components/Projects/components/ProjectBadge'
import React from 'react'
import { Skill } from 'types'

interface Props {
  languages: readonly Skill[]
  frameworks: readonly Skill[]
  colors?: {
    background: string
    foreground: string
  }
}

export function Badges({ languages, frameworks, colors }: Props): JSX.Element {
  return (
    <div className="d-flex flex-wrap mt-4" style={{ gap: '1rem' }}>
      {languages.map((language: any) => (
        <Badge
          colors={colors}
          skill={language}
          key={`project-skill-language-${language.name}`}
        />
      ))}
      {frameworks.map((framework: any) => (
        <Badge
          colors={colors}
          skill={framework}
          key={`project-skill-framework-${framework.name}`}
        />
      ))}
    </div>
  )
}
