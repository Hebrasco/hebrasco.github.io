import { ExternalLink, Link } from 'components/ui'
import { ROUTES } from 'data'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export function Actions(): JSX.Element {
  return (
    <Row>
      <Col xs={12}>
        <ExternalLink
          to="/daniel_bedrich_resume.pdf"
          className="btn-dark"
          button
        >
          Download Resume
        </ExternalLink>
        <Link
          button
          to={ROUTES.contact}
          label="Let's Talk"
          className="btn-outline-dark ms-3"
        />
      </Col>
    </Row>
  )
}
