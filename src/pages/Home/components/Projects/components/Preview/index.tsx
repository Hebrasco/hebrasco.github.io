import React from 'react'
import { Row } from 'react-bootstrap'
import { Project } from 'types'
import { ProjectImages } from '../ProjectImages'
import { Actions, ComingSoon } from './components'
import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'
import { PROJECT_CONTAINER_SIZE } from 'pages/Home/components/Projects/constants'

import styles from './index.module.css'

interface Props {
  project: Project
  hasMarginRight: boolean
}

export function Preview({ project, hasMarginRight }: Props) {
  const { isXs, isSm } = useWindowSize()
  const width =
    isXs || isSm
      ? PROJECT_CONTAINER_SIZE.xs.width
      : PROJECT_CONTAINER_SIZE.md.width
  const height =
    isXs || isSm
      ? PROJECT_CONTAINER_SIZE.xs.height
      : PROJECT_CONTAINER_SIZE.md.height

  return (
    <div
      style={{
        width: `calc(${width}px + 1.5rem)`,
        height,
        scrollSnapAlign: conditionalStyle(isXs || isSm, 'center', 'start'),
      }}
    >
      <div
        className={`bg-light rounded shadow ${styles['preview-container']}`}
        style={{
          transform: conditionalStyle(
            isXs || isSm,
            'translateX(12px)',
            'translateX(245px)'
          ),
          marginRight: conditionalStyle(hasMarginRight, '20px', '60px'),
          width,
        }}
      >
        <div className={styles['preview-content-container']}>
          <div className="mb-auto">
            <h3>{project.name}</h3>
            <ComingSoon isComingSoon={project.isComingSoon} />
          </div>
          <ProjectImages images={project.previewImages} />
          <Actions
            onlineURL={project.onlineURL}
            sourceURL={project.sourceURL}
          />
        </div>
      </div>
    </div>
  )
}
