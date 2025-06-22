import { Section } from 'components/ui'
import { PROJECTS, ROUTES } from 'data'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Preview } from 'pages/Home/components/Projects/components/Preview'

import styles from './index.module.css'

export function Projects(): JSX.Element {
  return (
    <Container fluid className="p-0 mt-5 navbar-spacer">
      <Section
        lg
        title="Projects"
        anchor={ROUTES.projects}
        fluidContainer
        bottomPadding
      >
        <div className={styles['preview-scroll-container']}>
          <div className={styles['preview-container']}>
            <div className={styles['preview-container-card-set']}>
              {PROJECTS.map((project) => (
                <Preview project={project} key={`project-${project.name}`} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
