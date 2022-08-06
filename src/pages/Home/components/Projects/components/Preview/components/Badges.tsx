import Badge from 'pages/Home/components/Projects/components/ProjectBadge'
import React from 'react'
import { Skill } from 'types'

interface Props {
  languages: readonly Skill[]
  frameworks: readonly Skill[]
}

export default function Badges({ languages, frameworks }: Props): JSX.Element {
  return (
    <div className="mt-4 mb-1">
      {languages.map((language: any) => (
        <Badge
          skill={language}
          key={`project-skill-language-${language.name}`}
        />
      ))}
      {frameworks.map((framework: any) => (
        <Badge
          skill={framework}
          key={`project-skill-framework-${framework.name}`}
        />
      ))}
    </div>
  )
}
