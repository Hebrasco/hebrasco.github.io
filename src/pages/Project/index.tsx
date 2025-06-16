import { PROJECTS } from 'data'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

export function Project(): JSX.Element {
  const { projectId } = useParams()

  const project = useMemo(
    () => PROJECTS.find(({ id }) => id === projectId),
    [projectId]
  )

  if (!projectId || !project) return <div>Project not found</div>

  return <div>{project.name}</div>
}
