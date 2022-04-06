import React from 'react'
import { Col } from 'react-bootstrap'
import { PORTFOLIO_NAME } from 'constants/config'
import { ROUTES } from 'constants/routes'
import Link from 'common/Link'
import SocialLinks from 'common/SocialLinks'
import { conditionalStyle } from 'utils/helpers'
import { useWindowSize } from 'utils/hooks'

export function Copyright(): JSX.Element {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <Col>
      <p className="align-items-center m-0 py-2">
        Copyright © {getCurrentYear()} {PORTFOLIO_NAME}. All rights reserved.
      </p>
    </Col>
  )
}

export function Links(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
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
  )
}
