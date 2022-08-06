import React from 'react'
import { PROJECTS } from 'data/profile'
import { Container, Row, Stack } from 'react-bootstrap'
import { Section } from 'components/ui'
import { ROUTES } from 'data/routes'
import { Preview } from './components'

export default function Projects(): JSX.Element {
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
