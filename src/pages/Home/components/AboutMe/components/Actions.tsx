import { Column, Row } from 'components/layout'
import { ExternalLink } from 'components/ui'
import { CONFIG } from 'data'

function Actions() {
  return (
    <Row>
      <Column className="d-flex align-items-center gap-3" xs={12}>
        <ExternalLink button className="btn-dark" to="/daniel_bedrich_resume.pdf">
          Download Resume
        </ExternalLink>
        <span className="d-inline-flex align-items-center">
          <ExternalLink to={`mailto:${CONFIG.profile.email}`}>Let's Talk</ExternalLink>
          <i className="bi bi-arrow-up-right-circle-fill d-flex ms-1"></i>
        </span>
      </Column>
    </Row>
  )
}

export { Actions }
