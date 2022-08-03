import React from 'react'
import { Col } from 'react-bootstrap'
import { ROUTES } from 'constants/routes'
import { Link, SocialLinks } from 'common'
import { conditionalStyle } from 'utils/helpers'
import { useWindowSize } from 'utils/hooks'

export default function Links(): JSX.Element {
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