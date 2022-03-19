import React, { useState, createRef } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ROUTES } from 'constants/Routes'
import ProjectCard from './ProjectCard'
import { PROJECTS as myProjects } from 'constants/Projects'
import Button from 'react-bootstrap/esm/Button'
import ProjectModel from 'models/ProjectModel'

import './Projects.css'

const hideProjectsOffset = 6
const HIGHLIGHTED_PROJECTS = myProjects.filter((project) => project.highlighted)
const UNPINNED_PROJECTS = myProjects.filter(
  (project) => !HIGHLIGHTED_PROJECTS.includes(project)
)
const LATEST_PROJECTS = UNPINNED_PROJECTS.filter(
  (_, index) => index < hideProjectsOffset
)
const MORE_PROJECTS = UNPINNED_PROJECTS.filter(
  (project) => !LATEST_PROJECTS.includes(project)
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

  function getProjectCard(project: ProjectModel, index: number): JSX.Element {
    const extraLargeSize = 6
    const largeSize = 6
    const mediumSize = 6
    const smallSize = 12

    return (
      <Col
        xs={smallSize}
        md={mediumSize}
        lg={largeSize}
        xl={extraLargeSize}
        className={`mb-4 ${
          index % 2 ? 'pl-md-4' : 'pr-md-4'
        } d-flex align-items-stretch`}
        key={`project-${project.name}`}
      >
        <ProjectCard project={project} />
      </Col>
    )
  }

  return (
    <Container className="mt-5 navbar-spacer">
      <div id={ROUTES.projects.replace('/#', '')} className="anchor"></div>
      <h1>Highlighted projects</h1>
      <Row>{HIGHLIGHTED_PROJECTS.map(getProjectCard)}</Row>
      <h1>{isShowMoreProjects ? 'Projects' : 'Latest projects'} </h1>
      <Row>{LATEST_PROJECTS.map(getProjectCard)}</Row>
      {!isShowMoreProjects ? (
        <Row>
          <Button
            onClick={showMoreProjectsPressed}
            variant="outline-primary"
            className="mb-5 mx-auto"
          >
            load all projects
          </Button>
        </Row>
      ) : null}
      <Row className="more-projects" ref={showMoreProjectsRef}>
        {isShowMoreProjects ? MORE_PROJECTS.map(getProjectCard) : null}
      </Row>
    </Container>
  )
}
