import { Section } from 'components/ui'
import { PROJECTS, ROUTES } from 'data'
import React from 'react'
import { Container, Row, Stack } from 'react-bootstrap'
import { Preview } from './components'

export function Projects(): JSX.Element {
  return (
    <Container className="mt-5 navbar-spacer">
      <Section lg title="Projects" anchor={ROUTES.projects}>
        <Row>
          <Stack gap={5}>
            {PROJECTS.map((project) => (
              <Preview project={project} key={`project-${project.name}`} />
            ))}
          </Stack>
        </Row>
      </Section>
    </Container>
  )
}
