import React from 'react'
import ISkill from 'components/interfaces/ISkill'
import { Badge } from 'react-bootstrap'

export default function MyBadge({ skill }: { skill: ISkill }): JSX.Element {
  return (
    <Badge pill bg="dark" className="py-2 px-3 mb-3">
      {skill.name}
    </Badge>
  )
}
