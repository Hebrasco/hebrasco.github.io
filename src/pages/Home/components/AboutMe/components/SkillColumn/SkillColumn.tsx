import { Column } from 'components/layout'
import { KeyInfoTitle } from 'components/ui/KeyInfoTitle'
import { ProjectBadge } from 'pages/Home/components/Projects/components/ProjectBadge'
import styles from './SkillColumn.module.css'
import type { Skill } from 'types'

interface Props {
  title: string
  data: readonly Skill[]
}

function SkillColumn({ title, data }: Props) {
  return (
    <Column className={`${styles['skills-column']}`} md={4} xs={12}>
      <KeyInfoTitle title={title} />
      <ul className="list-unstyled d-flex flex-wrap gap-2">
        {data.map((skill) => (
          <li className="d-flex" key={`skill-${skill.name}`}>
            <ProjectBadge skill={skill} />
          </li>
        ))}
      </ul>
    </Column>
  )
}

export { SkillColumn }
