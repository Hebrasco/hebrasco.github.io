import styles from './ProjectBadge.module.css'
import type { Skill } from 'types'

interface Props {
  skill: Skill
}

function ProjectBadge({ skill }: Props) {
  return <span className={`${styles.badge} py-2 px-3`}>{skill.name}</span>
}

export { ProjectBadge }
