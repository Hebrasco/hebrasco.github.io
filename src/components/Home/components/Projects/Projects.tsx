import React, { useState, createRef } from 'react'
import { ROUTES } from 'constants/Routes'
import { PROJECTS as myProjects } from 'constants/Projects'
import ProjectModel from 'models/ProjectModel'
import ProjectApp from './components/ProjectApp/ProjectApp'
import { Col, Container, Row } from 'react-bootstrap'

import './Projects.css'

const HIGHLIGHTED_PROJECTS = myProjects.filter((project) => project.highlighted)
const NON_HIGHLIGHTED_PROJECTS = myProjects.filter(
  (project) => !HIGHLIGHTED_PROJECTS.includes(project)
)

export default function Projects(): JSX.Element {
  const [isShowMoreProjects, setIsShowMoreProjects] = useState(false)
  const showMoreProjectsRef: React.RefObject<HTMLInputElement> = createRef()

  function showMoreProjectsPressed() {
    const moreProjectsWrapper = showMoreProjectsRef.current

    setIsShowMoreProjects(true)

    if (moreProjectsWrapper) {
      moreProjectsWrapper.classList.add('showing')
    }
  }

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
      <div id={ROUTES.projects.replace('/#', '')} className="anchor"></div>
      <h1>Highlighted projects</h1>
      <Row>{HIGHLIGHTED_PROJECTS.map(getProjectApp)}</Row>
      <h1>{isShowMoreProjects ? 'Projects' : 'Latest projects'} </h1>
      <Row>{NON_HIGHLIGHTED_PROJECTS.map(getProjectApp)}</Row>
    </Container>
  )
}
