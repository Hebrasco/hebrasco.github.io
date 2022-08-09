import React from 'react'
import { Badge } from 'react-bootstrap'
import { Skill } from 'types'

interface Props {
  skill: Skill
}

export function ProjectBadge({ skill }: Props): JSX.Element {
  return (
    <Badge pill bg="dark" className="py-2 px-3 mb-3">
      {skill.name}
    </Badge>
  )
}
