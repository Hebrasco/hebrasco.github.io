import React from 'react'
import ProjectModel from 'models/ProjectModel'
import { Col, Row } from 'react-bootstrap'
import ProjectImages from '../ProjectImages'
import { Badges, Actions, ComingSoon, Responsibilities } from './components'

interface Props {
  project: ProjectModel
}

export default function Preview({ project }: Props) {
  return (
    <div className="p-5 bg-light rounded">
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
