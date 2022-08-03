import React from 'react'
import { Email, Section } from 'common'
import { Col, Container } from 'react-bootstrap'
import { ROUTES } from 'constants/routes'
import Form from './components/Form'

export default function Contact() {
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
