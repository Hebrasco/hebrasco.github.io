import { Column, Container, Row } from 'components/layout'
import { Email, Section } from 'components/ui'
import { ROUTES } from 'data'

function Contact() {
  return (
    <Container>
      <Section anchor={ROUTES.contact} lg title="Contact">
        <Row>
          <Column>
            <p>New projects, freelance inquiry or even a coffee.</p>
          </Column>
          <Column>
            <Email />
          </Column>
        </Row>
      </Section>
    </Container>
  )
}

export { Contact }
