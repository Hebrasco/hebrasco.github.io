import ProjectModel from 'models/ProjectModel'
import React from 'react'
import { Badge, Col, Image, Row } from 'react-bootstrap'
import BlankIcon from 'assets/icons/blank_icon.svg'
import ExternalLink from 'common/ExternalLink/ExternalLink'
import DeviceFrame, { DEVICE_TYPES } from 'common/DeviceFrame/DeviceFrame'
import iphoneSEScreen from 'assets/images/screenshots/recipe/iphoneSE.png'
import ISkill from 'interfaces/ISkill'

interface Props {
  project: ProjectModel
}

export default function ProjectPreview({ project }: Props) {
  const isBlankIcon = project.image === BlankIcon

  function MyBadge({ skill }: { skill: ISkill }): JSX.Element {
    return (
      <Badge pill bg="dark" className="py-2 px-3 mb-3">
        {skill.name}
      </Badge>
    )
  }

  return (
    <Row className="mb-5">
      <Col>
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
              <p>{project.description}</p>
              <p>Responsibilities included:</p>
              <ul>
                {project.tasks.map((task: any, index) => {
                  return (
                    <li key={`project-tasks-${project.name}-${index}`}>
                      {task}
                    </li>
                  )
                })}
              </ul>
              <div>
                {project.onlineURL && (
                  <ExternalLink to={project.onlineURL}>
                    <p className="text-primary">view</p>
                  </ExternalLink>
                )}
              </div>
              <div>
                {project.sourceURL && (
                  <ExternalLink to={project.sourceURL}>
                    <p className="text-primary">source code</p>
                  </ExternalLink>
                )}
              </div>
            </Col>
            <Col>
              <DeviceFrame
                image={iphoneSEScreen}
                type={DEVICE_TYPES.iphoneSE}
              />
              {/* <Image
          src={project.image}
          width="100%"
          rounded
          className={`${isBlankIcon ? 'invertDark' : null}`}
        /> */}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}
