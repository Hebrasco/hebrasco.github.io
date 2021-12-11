import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Row from 'react-bootstrap/esm/Row'
import BlankIcon from 'assets/icons/blank_icon.svg'

interface Props {
  imageUrl: string
  title: string
  timePeriod: string
  description: string
  tasks: JSX.Element
  languages?: JSX.Element
  frameworks?: JSX.Element
  onlineURL?: string
  sourceURL?: string
}

export default function ProjectCard(props: Props): JSX.Element {
  const imageGridSizeXs = 3
  const imageGridSizeMd = 3
  const imageGridSizeLg = 2

  const isBlankIcon = props.imageUrl === BlankIcon

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
              src={props.imageUrl}
              width="100%"
              rounded
              className={`${isBlankIcon ? 'invertDark' : null}`}
            />
          </Col>
          <Col className="d-flex align-items-center lead">
            <Col className="p-0">
              <Card.Title className="mb-0">{props.title}</Card.Title>
              <small className="m-0">{props.timePeriod}</small>
            </Col>
          </Col>
        </Row>
        <Card.Text>
          {props.description}
          <br />
          <br />
          Responsibilities included:
          <br />
        </Card.Text>
        {props.tasks}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.languages ? (
          <ListGroupItem>{props.languages}</ListGroupItem>
        ) : null}
        {props.frameworks ? (
          <ListGroupItem>{props.frameworks}</ListGroupItem>
        ) : null}
      </ListGroup>
      <Card.Footer>
        {props.onlineURL ? (
          <Card.Link
            href={props.onlineURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </Card.Link>
        ) : null}
        {props.sourceURL ? (
          <Card.Link
            href={props.sourceURL}
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
