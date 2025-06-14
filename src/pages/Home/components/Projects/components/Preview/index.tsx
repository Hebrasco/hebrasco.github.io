import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Project } from 'types'
import { ProjectImages } from '../ProjectImages'
import { Actions, Badges, ComingSoon, Responsibilities } from './components'

interface Props {
  project: Project
}

export function Preview({ project }: Props) {
  return (
    <div className="p-5 bg-light rounded shadow">
      <Row>
        <Col md={6}>
          <h3>{project.name}</h3>
          <ComingSoon isComingSoon={project.isComingSoon} />
          <Badges
            languages={project.languages}
            frameworks={project.frameworks}
          />
          <ProjectImages images={project.previewImages} mobileOnly />
          <p>{project.description}</p>
          <Responsibilities tasks={project.tasks} projectName={project.name} />
          <Actions
            onlineURL={project.onlineURL}
            sourceURL={project.sourceURL}
          />
        </Col>
        <ProjectImages images={project.previewImages} />
      </Row>
    </div>
  )
}
