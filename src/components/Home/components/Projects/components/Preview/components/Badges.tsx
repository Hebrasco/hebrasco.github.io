import React from 'react'
import Framework from 'models/FrameworkModel'
import Language from 'models/LanguageModel'
import Badge from '../../ProjectBadge'

interface Props {
  languages: readonly Language[]
  frameworks: readonly Framework[]
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
