import { ProjectBadge as Badge } from 'pages/Home/components/Projects/components/ProjectBadge'
import type { Skill } from 'types'

interface Props {
  languages: readonly Skill[]
  frameworks: readonly Skill[]
}

export function Badges({ languages, frameworks }: Props) {
  return (
    <div className="d-flex flex-wrap mt-4 gap-2">
      {languages.map((language) => (
        <Badge key={`project-skill-language-${language.name}`} skill={language} />
      ))}
      {frameworks.map((framework) => (
        <Badge key={`project-skill-framework-${framework.name}`} skill={framework} />
      ))}
    </div>
  )
}
