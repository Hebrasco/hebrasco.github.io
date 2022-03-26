import React from 'react'
import { ROUTES } from 'constants/routes'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'common/Link/Link'
import SocialLinks from 'common/SocialLinks/SocialLinks'
import { conditionalStyle } from 'utils/helpers'
import { useWindowSize } from 'utils/hooks'

import './Footer.css'

export default function Footer(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Container fluid className="footer bg-light">
      <footer className="py-3">
        <Row>
          <Col>
            <p className="align-items-center m-0 py-2">
              Copyright © {getCurrentYear()} Daniel Bedrich. All rights
              reserved.
            </p>
          </Col>
          <Col xs="12" md="auto">
            <div className="d-flex">
              <Link to={ROUTES.imprintHash} label="Imprint" />
              <Link
                to={ROUTES.privacyPolicyHash}
                label="Privacy Policy"
                className={`${conditionalStyle(isXs || isSm, 'me-auto')}`}
              />
              <SocialLinks useIcons />
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}
