import ISkill from 'interfaces/ISkill'
import React from 'react'
import { Col } from 'react-bootstrap'

import './SkillColumn.css'

interface Props {
  title: string
  data: ISkill[]
}

export default function SkillColumn({ title, data }: Props) {
  return (
    <Col
      xs={12}
      md={4}
      className="skills-column mb-3 mb-md-0 d-flex align-items-stretch justify-content-center"
    >
      <div className="p-4 py-5 bg-light rounded">
        <h4 className="text-center mb-4">{title}</h4>
        <ul className="list-unstyled mb-0">
          {data.map((skill) => (
            <li key={`skill-${skill.name}`} className="text-center mb-1">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </Col>
  )
}
