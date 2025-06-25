import React from 'react'
import { Skill } from 'types'

import styles from './index.module.css'

interface Props {
  skill: Skill
}

export function ProjectBadge({ skill }: Props): JSX.Element {
  return <span className={`${styles['badge']} py-2 px-3`}>{skill.name}</span>
}
