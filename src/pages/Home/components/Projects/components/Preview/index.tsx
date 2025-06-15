import React from 'react'
import { Row } from 'react-bootstrap'
import { Project } from 'types'
import { ProjectImages } from '../ProjectImages'
import { Actions, ComingSoon } from './components'
import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'

interface Props {
  project: Project
  hasMarginRight: boolean
}

const width = 400

export function Preview({ project, hasMarginRight }: Props) {
  const { isXs, isSm } = useWindowSize()

  return (
    <div
      style={{
        width: `calc(${width}px + 1.5rem)`,
        height: 500,
        scrollSnapAlign: 'start',
      }}
    >
      <div
        className={`${conditionalStyle(
          hasMarginRight,
          'me-4'
        )} p-5 bg-light rounded shadow`}
        style={{
          transform: conditionalStyle(
            isXs || isSm,
            'translateX(20px)',
            'translateX(225px)'
          ),
          height: '100%',
          width,
        }}
      >
        <Row>
          <h3>{project.name}</h3>
          <ComingSoon isComingSoon={project.isComingSoon} />
          <ProjectImages images={project.previewImages} />
          <Actions
            onlineURL={project.onlineURL}
            sourceURL={project.sourceURL}
          />
        </Row>
      </div>
    </div>
  )
}
