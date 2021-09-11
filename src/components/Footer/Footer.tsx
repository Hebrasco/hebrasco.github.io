import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { HashLink as Link } from 'react-router-hash-link'
import { Routes } from '../../Constants/Routes'

export default function Footer(): JSX.Element {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="footer bg-light text-muted">
      <Container>
        <Row>
          <div>
            <p className="nav-link">
              Copyright © {getCurrentYear()} Daniel Bedrich. Alle Rechte
              vorbehalten.
            </p>
          </div>
          <div
            className="ml-md-auto"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <Link
              to={Routes.imprintHash}
              smooth
              className="nav-link text-muted"
            >
              Impressum
            </Link>
            <Link
              to={Routes.privacyPolicyHash}
              smooth
              className="nav-link text-muted"
            >
              Datenschutz
            </Link>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
