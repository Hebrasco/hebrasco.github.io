import { PROJECTS } from 'data'
import { ComingSoon } from 'pages/Home/components/Projects/components/Preview/components'
import { Action } from 'pages/Home/components/Projects/components/ProjectAction'
import { Badges } from 'pages/Project/components/Badges'
import ProjectImages from 'pages/Project/components/ProjectImages'
import { Responsibilities } from 'pages/Project/components/Responsibilities'
import React, { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export function Project(): JSX.Element {
  const { projectId } = useParams()

  const project = useMemo(
    () => PROJECTS.find(({ id }) => id === projectId),
    [projectId]
  )

  if (!projectId || !project) return <div>Project not found</div>

  return (
    <Container>
      <div className="p-5 bg-light my-5 rounded">
        <Row>
          <Col md={6}>
            <h1>{project.name}</h1>
            <Badges
              languages={project.languages}
              frameworks={project.frameworks}
            />
            <ComingSoon isComingSoon={project.isComingSoon} />
            <Col className="d-flex d-md-none mt-4 mb-5">
              <ProjectImages images={project.previewImages} />
            </Col>
            <p>{project.description}</p>
            <Responsibilities
              projectName={project.name}
              tasks={project.tasks}
            />
          </Col>
          <Col className="align-items-center align-items-lg-end d-none d-md-flex">
            <ProjectImages images={project.previewImages} />
          </Col>
          <div
            className="mt-4 mt-md-5 d-flex justify-content-space-between"
            style={{ height: 38 }}
          >
            <Action
              to={project.onlineURL}
              label="App Store"
              filled
              className="btn btn-dark"
            />
            <Action
              to={project.sourceURL}
              label="Source Code"
              className="btn btn-outline-dark"
            />
          </div>
        </Row>
      </div>
    </Container>
  )
}
