import React from 'react'
import { ROUTES } from 'constants/Routes'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'common/Link/Link'

import './Footer.css'

export default function Footer(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Container fluid className="footer bg-light">
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
              <Link to={ROUTES.imprintHash} label="Imprint" navItem />
              <Link
                to={ROUTES.privacyPolicyHash}
                label="Privacy Policy"
                navItem
              />
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}
