import React from 'react'

interface Props {
  projectName: string
  tasks: readonly string[]
}

export function Responsibilities({ tasks, projectName }: Props): JSX.Element {
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
