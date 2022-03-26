import React from 'react'
import ProjectModel from 'models/ProjectModel'
import { Col, Row } from 'react-bootstrap'
import Action from './ProjectAction'
import Badge from './ProjectBadge'
import ProjectImages from './ProjectImages'

interface Props {
  project: ProjectModel
}

export default function ProjectPreview({ project }: Props) {
  function Badges(): JSX.Element {
    return (
      <div className="mt-4 mb-1">
        {project.languages.map((language: any) => (
          <Badge
            skill={language}
            key={`project-skill-language-${language.name}`}
          />
        ))}
        {project.frameworks.map((framework: any) => (
          <Badge
            skill={framework}
            key={`project-skill-framework-${framework.name}`}
          />
        ))}
      </div>
    )
  }

  function Responsibilities(): JSX.Element {
    return (
      <>
        <p>Responsibilities included:</p>
        <ul>
          {project.tasks.map((task: any, index) => (
            <li key={`project-tasks-${project.name}-${index}`}>{task}</li>
          ))}
        </ul>
      </>
    )
  }

  function Actions(): JSX.Element {
    return (
      <div className="mt-5">
        <Action to={project.onlineURL} label="View" className="m-0" filled />
        <Action to={project.sourceURL} label="Source Code" className="ms-3" />
      </div>
    )
  }

  return (
    <div className="p-5 bg-light rounded">
      <Row>
        <Col md={6}>
          <h3>{project.name}</h3>
          {project.isComingSoon && <p className="text-muted">Coming Soon</p>}
          <Badges />
          <ProjectImages previewRender={project.preview} mobileOnly />
          <p>{project.description}</p>
          <Responsibilities />
          <Actions />
        </Col>
        <ProjectImages previewRender={project.preview} />
      </Row>
    </div>
  )
}
