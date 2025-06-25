import React from 'react'
import { Col } from 'react-bootstrap'
import { Skill } from 'types'

import styles from './index.module.css'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import { Section } from 'components/ui'

interface Props {
  title: string
  data: readonly Skill[]
}

export function SkillColumn({ title, data }: Props): JSX.Element {
  return (
    <Col xs={12} md={4} className={`${styles['skills-column']} d-flex`}>
      <Section title={title} xs>
        <ul className="list-unstyled mb-0 d-flex flex-wrap gap-2">
          {data.map((skill) => (
            <li key={`skill-${skill.name}`} className="mb-1 d-flex">
              <ProjectBadge skill={skill} />
            </li>
          ))}
        </ul>
      </Section>
    </Col>
  )
}
