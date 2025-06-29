import { Section } from 'components/ui'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import { Col } from 'react-bootstrap'
import styles from './index.module.css'
import type { Skill } from 'types'

interface Props {
  title: string
  data: readonly Skill[]
}

export function SkillColumn({ title, data }: Props): JSX.Element {
  return (
    <Col className={`${styles['skills-column']} d-flex`} md={4} xs={12}>
      <Section title={title} xs>
        <ul className="list-unstyled mb-0 d-flex flex-wrap gap-2">
          {data.map((skill) => (
            <li className="mb-1 d-flex" key={`skill-${skill.name}`}>
              <ProjectBadge skill={skill} />
            </li>
          ))}
        </ul>
      </Section>
    </Col>
  )
}
