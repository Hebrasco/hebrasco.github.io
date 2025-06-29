import { Link, SocialLinks } from 'components/ui'
import { ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import { Col } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

export function Links(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <Col className="align-content-center" md="auto" xs="12">
      <div className="d-flex gap-4">
        <Link label="Imprint" navItem to={ROUTES.imprintHash} />
        <Link
          className={`${conditionalStyle(isXs || isSm, 'me-auto')}`}
          label="Privacy Policy"
          navItem
          to={ROUTES.privacyPolicyHash}
        />
        <SocialLinks useIcons />
      </div>
    </Col>
  )
}
