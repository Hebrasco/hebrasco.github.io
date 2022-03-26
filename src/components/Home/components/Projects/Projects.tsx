import React from 'react'
import { PROJECTS } from 'constants/projects'
import { Container, Row, Stack } from 'react-bootstrap'
import Section from 'common/Section/Section'
import { ROUTES } from 'constants/routes'
import ProjectPreview from './components/ProjectPreview'

export default function Projects(): JSX.Element {
  return (
    <Container className="mt-5 navbar-spacer">
      <Row>
        <Section lg title="Projects" anchor={ROUTES.projects}>
          <Stack gap={5}>
            {PROJECTS.map((project) => (
              <ProjectPreview
                project={project}
                key={`project-${project.name}`}
              />
            ))}
          </Stack>
        </Section>
      </Row>
    </Container>
  )
}
