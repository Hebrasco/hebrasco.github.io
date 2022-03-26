import React from 'react'
import Framework from 'models/FrameworkModel'
import Language from 'models/LanguageModel'
import Action from './ProjectAction'
import Badge from './ProjectBadge'

interface BadgesProps {
  languages: Language[]
  frameworks: Framework[]
}

export function Badges({ languages, frameworks }: BadgesProps): JSX.Element {
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

interface ResponsibilitiesProps {
  projectName: string
  tasks: string[]
}

export function Responsibilities({
  tasks,
  projectName,
}: ResponsibilitiesProps): JSX.Element {
  return (
    <>
      <p>Responsibilities included:</p>
      <ul>
        {tasks.map((task: any, index) => (
          <li key={`project-tasks-${projectName}-${index}`}>{task}</li>
        ))}
      </ul>
    </>
  )
}

interface ActionsProps {
  onlineURL?: string
  sourceURL?: string
}

export function Actions({ onlineURL, sourceURL }: ActionsProps): JSX.Element {
  return (
    <div className="mt-5">
      <Action to={onlineURL} label="View" className="m-0" filled />
      <Action to={sourceURL} label="Source Code" className="ms-3" />
    </div>
  )
}
