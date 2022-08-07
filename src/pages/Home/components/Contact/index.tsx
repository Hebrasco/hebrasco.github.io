import { Email, Section } from 'components/ui'
import { ROUTES } from 'data'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Form } from './components'

export function Contact() {
  return (
    <Container>
      <Section lg title="Let's talk" bottomPadding anchor={ROUTES.contact}>
        <p className="m-0">New projects, freelance inquiry or even a coffee.</p>
        <Col xs={12} md={6}>
          <Form />
        </Col>
        <Col>
          <p className="mb-0">Email me</p>
          <Email />
        </Col>
      </Section>
    </Container>
  )
}
