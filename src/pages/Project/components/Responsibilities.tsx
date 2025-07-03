interface Props {
  projectName: string
  tasks: readonly string[]
}

export function Responsibilities({ tasks, projectName }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={`project-tasks-${projectName}-${task}`}>{task}</li>
      ))}
    </ul>
  )
}
