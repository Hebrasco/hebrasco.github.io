import React from 'react'
import { PROJECTS } from 'constants/Projects'
import { Container, Stack } from 'react-bootstrap'
import Section from 'common/Section/Section'
import { ROUTES } from 'constants/Routes'
import ProjectPreview from './components/ProjectPreview/ProjectPreview'

export default function Projects(): JSX.Element {
  return (
    <Container className="mt-5 navbar-spacer">
      <Section lg title="Projects" anchor={ROUTES.projects}>
        <Stack gap={5}>
          {PROJECTS.map((project) => (
            <ProjectPreview project={project} key={`project-${project.name}`} />
          ))}
        </Stack>
      </Section>
    </Container>
  )
}
