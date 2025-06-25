import { ExternalLink } from 'components/ui'
import { CONFIG } from 'data'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export function Actions(): JSX.Element {
  return (
    <Row>
      <Col xs={12} className="d-flex align-items-center gap-3">
        <ExternalLink
          to="/daniel_bedrich_resume.pdf"
          className="btn-dark"
          button
        >
          Download Resume
        </ExternalLink>
        <span className="d-inline-flex align-items-center">
          <ExternalLink to={`mailto:${CONFIG.profile.email}`}>
            Let's Talk
          </ExternalLink>
          <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
        </span>
      </Col>
    </Row>
  )
}
