import { Section } from 'components/ui'
import { PROJECTS, ROUTES } from 'data'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Preview } from 'pages/Home/components/Projects/components/Preview'
import { useWindowSize } from 'hooks'
import {
  PROJECT_CONTAINER_SIZE,
  PROJECT_CONTAINER_HEIGHT_OFFSET,
} from 'pages/Home/components/Projects/constants'

import styles from './index.module.css'

export function Projects(): JSX.Element {
  const { isXs, isSm } = useWindowSize()
  const height =
    isXs || isSm
      ? PROJECT_CONTAINER_SIZE.xs.height
      : PROJECT_CONTAINER_SIZE.md.height

  return (
    <Container fluid className="p-0">
      <Container className="mt-5 navbar-spacer">
        <Section lg title="Projects" anchor={ROUTES.projects}></Section>
      </Container>
      <div>
        <div
          className={styles['preview-scroll-container']}
          style={{
            height: `${height + PROJECT_CONTAINER_HEIGHT_OFFSET}px`,
          }}
        >
          <div
            className={`d-flex flex-row flex-nowrap pt-3 pb-5 ${styles['preview-container']}`}
          >
            {PROJECTS.map((project, index) => (
              <Preview
                project={project}
                key={`project-${project.name}`}
                hasMarginRight={index !== PROJECTS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
