import { Email, Section } from 'components/ui'
import { ROUTES } from 'data'
import { Col, Container } from 'react-bootstrap'

export function Contact() {
  return (
    <Container>
      <Section anchor={ROUTES.contact} bottomPadding lg title="Contact">
        <p>New projects, freelance inquiry or even a coffee.</p>
        <Col>
          <Email />
        </Col>
      </Section>
    </Container>
  )
}
