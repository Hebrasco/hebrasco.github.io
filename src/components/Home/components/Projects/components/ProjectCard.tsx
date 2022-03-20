import React from 'react'
import BlankIcon from 'assets/icons/blank_icon.svg'
import ProjectModel from 'models/ProjectModel'
import {
  Badge,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'

interface Props {
  project: ProjectModel
}

export default function ProjectCard({ project }: Props): JSX.Element {
  const imageGridSizeXs = 3
  const imageGridSizeMd = 3
  const imageGridSizeLg = 2

  const isBlankIcon = project.image === BlankIcon

  return (
    <Card className="mb-4 shadow border-0" style={{ width: '100%' }}>
      <Card.Body>
        <Row className="mb-4">
          <Col
            xs={imageGridSizeXs}
            md={imageGridSizeMd}
            lg={imageGridSizeLg}
            className="align-self-center"
          >
            <Image
              src={project.image}
              width="100%"
              rounded
              className={`${isBlankIcon ? 'invertDark' : null}`}
            />
          </Col>
          <Col className="d-flex align-items-center lead">
            <Col className="p-0">
              <Card.Title className="mb-0">{project.name}</Card.Title>
              <small className="m-0">{project.timePeriod}</small>
            </Col>
          </Col>
        </Row>
        <Card.Text>
          {project.description}
          <br />
          <br />
          Responsibilities included:
          <br />
        </Card.Text>
        <ul>
          {project.tasks.map((task: any, index) => {
            return (
              <li key={`project-tasks-${project.name}-${index}`}>{task}</li>
            )
          })}
        </ul>
      </Card.Body>
      <ListGroupItem className="list-group-flush">
        {project.languages ? (
          <ListGroupItem>
            <>
              {project.languages.map((language: any) => {
                return (
                  <Badge
                    pill
                    bg={language.variant}
                    key={`project-skill-language-${language.name}`}
                  >
                    {language.name}
                  </Badge>
                )
              })}
            </>
          </ListGroupItem>
        ) : null}
        {project.frameworks ? (
          <ListGroupItem>
            <>
              {project.frameworks.map((framework: any) => {
                return (
                  <Badge
                    pill
                    bg={framework.variant}
                    key={`project-skill-framework-${framework.name}`}
                  >
                    {framework.name}
                  </Badge>
                )
              })}
            </>
          </ListGroupItem>
        ) : null}
      </ListGroupItem>
      <Card.Footer>
        {project.onlineURL ? (
          <Card.Link
            href={project.onlineURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </Card.Link>
        ) : null}
        {project.sourceURL ? (
          <Card.Link
            href={project.sourceURL}
            className="float-right"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </Card.Link>
        ) : null}
      </Card.Footer>
    </Card>
  )
}
