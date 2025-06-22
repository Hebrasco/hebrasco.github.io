import { Email, Section } from 'components/ui'
import { ROUTES } from 'data'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

export function Contact() {
  return (
    <Container>
      <Section lg title="Contact" bottomPadding anchor={ROUTES.contact}>
        <p>New projects, freelance inquiry or even a coffee.</p>
        <Col>
          <Email />
        </Col>
      </Section>
    </Container>
  )
}
