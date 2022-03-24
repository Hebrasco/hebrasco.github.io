import ProjectModel from 'models/ProjectModel'
import React from 'react'
import { Badge, Button, Col, Image, Row } from 'react-bootstrap'
import ExternalLink from 'common/ExternalLink/ExternalLink'
import ISkill from 'interfaces/ISkill'

interface Props {
  project: ProjectModel
}

export default function ProjectPreview({ project }: Props) {
  function MyBadge({ skill }: { skill: ISkill }): JSX.Element {
    return (
      <Badge pill bg="dark" className="py-2 px-3 mb-3">
        {skill.name}
      </Badge>
    )
  }

  function Action({
    to,
    label,
    className = '',
    filled = false,
  }: {
    to: string | undefined
    label: string
    className?: string
    filled?: boolean
  }): JSX.Element {
    if (to) {
      return (
        <ExternalLink
          button
          to={to}
          className={`${filled ? 'btn-dark' : 'btn-outline-dark'} ${className}`}
        >
          {label}
        </ExternalLink>
      )
    }

    return (
      <Button
        variant={`${filled ? 'dark' : 'outline-dark'}`}
        disabled
        className={className}
      >
        {label}
      </Button>
    )
  }

  return (
    <div className="p-5 bg-light rounded">
      <Row>
        <Col md={6}>
          <h3>{project.name}</h3>
          <div className="mt-4 mb-1">
            {project.languages.map((language: any) => (
              <MyBadge
                skill={language}
                key={`project-skill-language-${language.name}`}
              />
            ))}
            {project.frameworks.map((framework: any) => (
              <MyBadge
                skill={framework}
                key={`project-skill-framework-${framework.name}`}
              />
            ))}
          </div>
          <div className="d-flex d-sm-none mt-4 mb-5">
            {project.preview && project.preview()}
          </div>
          <p>{project.description}</p>
          <p>Responsibilities included:</p>
          <ul>
            {project.tasks.map((task: any, index) => {
              return (
                <li key={`project-tasks-${project.name}-${index}`}>{task}</li>
              )
            })}
          </ul>
          <div className="mt-5">
            <Action
              to={project.onlineURL}
              label="View"
              className="m-0"
              filled
            />
            <Action
              to={project.sourceURL}
              label="Source Code"
              className="ms-3"
            />
          </div>
        </Col>
        {project.preview && (
          <Col className="align-items-center d-none d-sm-flex">
            {project.preview()}
          </Col>
        )}
      </Row>
    </div>
  )
}
