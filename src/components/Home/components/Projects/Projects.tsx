import React, { useState, createRef } from 'react'
import { ROUTES } from 'constants/Routes'
import { PROJECTS as myProjects } from 'constants/Projects'
import ProjectModel from 'models/ProjectModel'
import ProjectApp from './components/ProjectApp/ProjectApp'
import { Col, Container, Row } from 'react-bootstrap'
import Section from 'common/Section/Section'

import './Projects.css'

const HIGHLIGHTED_PROJECTS = myProjects.filter((project) => project.highlighted)
const NON_HIGHLIGHTED_PROJECTS = myProjects.filter(
  (project) => !HIGHLIGHTED_PROJECTS.includes(project)
)

export default function Projects(): JSX.Element {
  const showMoreProjectsRef: React.RefObject<HTMLInputElement> = createRef()

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
    <Section lg anchor={ROUTES.projects.replace('/#', '')}>
      <Container className="mt-5 navbar-spacer">
        <Section title="Highlighted projects">
          <Row>{HIGHLIGHTED_PROJECTS.map(getProjectApp)}</Row>
        </Section>
        <Section xs title="Projects">
          <Row>{NON_HIGHLIGHTED_PROJECTS.map(getProjectApp)}</Row>
        </Section>
      </Container>
    </Section>
  )
}
