import { Link, SocialLinks } from 'components/ui'
import { ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import React from 'react'
import { Col } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

export function Links(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <Col xs="12" md="auto" className="align-content-center">
      <div className="d-flex gap-4">
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
