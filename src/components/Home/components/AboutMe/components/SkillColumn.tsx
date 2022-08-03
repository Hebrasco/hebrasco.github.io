import './styles.css'

import React from 'react'
import ISkill from 'interfaces/ISkill'
import { Col } from 'react-bootstrap'

interface Props {
  title: string
  data: readonly ISkill[]
}

export default function SkillColumn({ title, data }: Props): JSX.Element {
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
