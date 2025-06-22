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
        <span className="d-inline-flex align-items-center">
          <Link to={ROUTES.contact} label="Let's Talk" className="ms-3" />
          <i className="bi bi-chevron-right d-flex"></i>
        </span>
      </Col>
    </Row>
  )
}
