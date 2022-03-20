import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { HashLink as Link } from 'react-router-hash-link'
import { ROUTES } from 'constants/Routes'

import './Footer.css'

export default function Footer(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Container fluid className="footer bg-light text-muted">
      <footer className="d-flex justify-content-between py-3">
        <p className="nav-link align-items-center m-0">
          Copyright © {getCurrentYear()} Daniel Bedrich. All rights reserved.
        </p>
        <div className="d-flex">
          <Link to={ROUTES.imprintHash} smooth className="nav-link text-muted">
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
      </footer>
    </Container>
  )
}
