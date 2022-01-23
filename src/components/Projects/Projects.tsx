import React, { useState, createRef } from 'react'
import Badge from 'react-bootstrap/esm/Badge'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ROUTES } from 'constants/Routes'
import ProjectCard from './ProjectCard'
import { PROJECTS as myProjects } from 'constants/Projects'
import Button from 'react-bootstrap/esm/Button'

import './Projects.css'

const hideProjectsOffset = 6
const PINNED_PROJECTS = myProjects.filter((project) => project.pinned)
const UNPINNED_PROJECTS = myProjects.filter(
  (project) => !PINNED_PROJECTS.includes(project)
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

  function getProjectCard(
    project: {
      pinned: boolean
      name: string
      image: string
      timePeriod: string
      description: string
      tasks: string[]
      languages: {
        name: string
        variant: string
      }[]
      frameworks: {
        name: string
        variant: string
      }[]
      onlineUrl?: string
      sourceURL?: string
    },
    index: number
  ): JSX.Element {
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
        <ProjectCard
          imageUrl={project.image}
          title={project.name}
          timePeriod={project.timePeriod}
          description={project.description}
          tasks={
            <ul>
              {project.tasks.map((task: any, index) => {
                return (
                  <li key={`project-tasks-${project.name}-${index}`}>{task}</li>
                )
              })}
            </ul>
          }
          languages={
            <>
              {project.languages.map((language: any) => {
                return (
                  <Badge
                    pill
                    variant={language.variant}
                    key={`project-skill-language-${language.name}`}
                  >
                    {language.name}
                  </Badge>
                )
              })}
            </>
          }
          frameworks={
            <>
              {project.frameworks.map((framework: any) => {
                return (
                  <Badge
                    pill
                    variant={framework.variant}
                    key={`project-skill-framework-${framework.name}`}
                  >
                    {framework.name}
                  </Badge>
                )
              })}
            </>
          }
          onlineURL={project.onlineUrl}
          sourceURL={project.sourceURL}
        />
      </Col>
    )
  }

  return (
    <Container className="mt-5 navbar-spacer">
      <div id={ROUTES.projects.replace('/#', '')} className="anchor"></div>
      <h1>Pinned projects</h1>
      <Row>{PINNED_PROJECTS.map(getProjectCard)}</Row>
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
