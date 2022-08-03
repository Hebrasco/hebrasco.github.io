import React from 'react'
import { PROJECTS } from 'constants/profile/projects'
import { Container, Row, Stack } from 'react-bootstrap'
import { Section } from 'common'
import { ROUTES } from 'constants/routes'
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
