import { Link, SocialLinks } from 'components/ui'
import { ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import { Col } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

function Links() {
  const { isMobile } = useWindowSize()

  return (
    <Col className="align-content-center" md="auto" xs="12">
      <div className="d-flex gap-4">
        <Link label="Imprint" navItem to={ROUTES.imprintHash} />
        <Link
          className={`${conditionalStyle(isMobile, 'me-auto')}`}
          label="Privacy Policy"
          navItem
          to={ROUTES.privacyPolicyHash}
        />
        <SocialLinks useIcons />
      </div>
    </Col>
  )
}

export { Links }
