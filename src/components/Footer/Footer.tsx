import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { HashLink as Link } from 'react-router-hash-link'
import { ROUTES } from 'constants/Routes'

export default function Footer(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <footer className="footer bg-light text-muted">
      <Container>
        <Row>
          <div>
            <p className="nav-link">
              Copyright © {getCurrentYear()} Daniel Bedrich. All rights
              reserved.
            </p>
          </div>
          <div
            className="ml-md-auto"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
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
        </Row>
      </Container>
    </footer>
  )
}
