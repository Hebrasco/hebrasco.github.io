import { Section } from 'components/ui'
import { PROJECTS, ROUTES } from 'data'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Preview } from 'pages/Home/components/Projects/components/Preview'

export function Projects(): JSX.Element {
  return (
    <Container fluid className="p-0">
      <Container className="mt-5 navbar-spacer">
        <Section lg title="Projects" anchor={ROUTES.projects}></Section>
      </Container>
      <div>
        <div style={{ overflow: 'hidden', height: 538 }}>
          <div
            className="d-flex flex-row flex-nowrap pb-5"
            style={{
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              overscrollBehaviorX: 'contain',
            }}
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
