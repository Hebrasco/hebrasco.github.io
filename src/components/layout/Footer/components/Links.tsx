import React from 'react'
import { Col } from 'react-bootstrap'
import { ROUTES } from 'data/routes'
import { Link, SocialLinks } from 'components/ui'
import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'

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
