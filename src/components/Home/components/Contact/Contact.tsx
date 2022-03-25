import Email from 'common/Email/Email'
import Section from 'common/Section/Section'
import React, { FormEvent, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { ROUTES } from 'constants/Routes'

import './Contact.css'

export default function Contact() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Container>
      <Section lg title="Let's talk" bottomPadding anchor={ROUTES.contact}>
        <p className="m-0">New projects, freelance inquiry or even a coffee.</p>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="my-5"
        >
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Name" type="name" required />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Email" type="email" required />
                  </InputGroup>
                </Col>
              </Row>
              <InputGroup className="mb-3">
                <Form.Control
                  id="exampleFormControlTextarea1"
                  placeholder="Subject"
                  type="text"
                  required
                />
              </InputGroup>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  type="text"
                  required
                />
              </InputGroup>
              <div className="mt-4">
                <Button variant="dark" type="submit">
                  Submit Form
                </Button>
                <Button variant="outline-dark" type="reset" className="ms-3">
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>

        <Row>
          <Col>
            <p className="mb-0">Email me</p>
            <Email />
          </Col>
        </Row>
      </Section>
    </Container>
  )
}
