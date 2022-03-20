import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { HashLink as Link } from 'react-router-hash-link'
import { ROUTES } from 'constants/Routes'
import { Col, Row } from 'react-bootstrap'

import './Footer.css'

export default function Footer(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Container fluid className="footer bg-light text-muted">
      <footer className="py-3">
        <Row>
          <Col>
            <p className="nav-link align-items-center m-0">
              Copyright © {getCurrentYear()} Daniel Bedrich. All rights
              reserved.
            </p>
          </Col>
          <Col xs="12" md="auto">
            <div className="d-flex">
              <Link
                to={ROUTES.imprintHash}
                smooth
                className="nav-link text-muted"
              >
                Imprint
              </Link>
              <Link
                to={ROUTES.privacyPolicyHash}
                smooth
                className="nav-link text-muted"
              >
                Privacy Policy
              </Link>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}
