import React from 'react'
import { PROJECTS } from 'constants/Projects'
import { Container } from 'react-bootstrap'
import Section from 'common/Section/Section'
import { ROUTES } from 'constants/Routes'
import ProjectPreview from './components/ProjectPreview/ProjectPreview'

import './Projects.css'

export default function Projects(): JSX.Element {
  return (
    <Container className="mt-5 navbar-spacer">
      <Section lg title="Projects" anchor={ROUTES.projects}>
        <>
          {PROJECTS.map((project) => (
            <ProjectPreview project={project} key={`project-${project.name}`} />
          ))}
        </>
      </Section>
    </Container>
  )
}
