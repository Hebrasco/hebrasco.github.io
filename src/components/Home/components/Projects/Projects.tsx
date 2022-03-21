import React from 'react'
import { PROJECTS } from 'constants/Projects'
import ProjectModel from 'models/ProjectModel'
import ProjectApp from './components/ProjectApp/ProjectApp'
import { Col, Container, Row } from 'react-bootstrap'
import Section from 'common/Section/Section'

import './Projects.css'

export default function Projects(): JSX.Element {
  function getProjectApp(project: ProjectModel, index: number): JSX.Element {
    const extraLargeSize = 2
    const largeSize = 2
    const mediumSize = 3
    const smallSize = 3

    return (
      <Col
        xs={smallSize}
        md={mediumSize}
        lg={largeSize}
        xl={extraLargeSize}
        className={`mb-4 ${
          index % 2 ? 'pl-md-4' : 'pr-md-4'
        } d-flex align-items-stretch justify-content-center`}
        key={`project-${project.name}`}
      >
        <ProjectApp project={project} />
      </Col>
    )
  }

  return (
    <Container className="mt-5 navbar-spacer">
      <Section lg title="Projects">
        <Row>{PROJECTS.map(getProjectApp)}</Row>
      </Section>
    </Container>
  )
}
