import React from 'react'
import { Skill } from 'types'

import styles from './index.module.css'

interface Props {
  skill: Skill
  colors?: {
    background: string
    foreground: string
  }
}

export function ProjectBadge({ skill, colors }: Props): JSX.Element {
  return (
    <span
      className={`${styles['badge']} py-2 px-3 mb-3`}
      style={{
        backgroundColor: colors?.background,
        color: colors?.foreground,
      }}
    >
      {skill.name}
    </span>
  )
}
