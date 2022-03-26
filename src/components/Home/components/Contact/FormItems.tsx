import React from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap'

export function FormName(): JSX.Element {
  return (
    <Col xs={12} lg={6}>
      <InputGroup className="mb-3">
        <Form.Control id="fromName" placeholder="Name" type="name" required />
      </InputGroup>
    </Col>
  )
}

export function FormEmail(): JSX.Element {
  return (
    <Col xs={12} lg={6}>
      <InputGroup className="mb-3">
        <Form.Control id="email" placeholder="Email" type="email" required />
      </InputGroup>
    </Col>
  )
}

export function FormSubject(): JSX.Element {
  return (
    <Col xs={12}>
      <InputGroup className="mb-3">
        <Form.Control id="subject" placeholder="Subject" type="text" required />
      </InputGroup>
    </Col>
  )
}

export function FormMessage(): JSX.Element {
  return (
    <Col xs={12}>
      <InputGroup>
        <Form.Control
          as="textarea"
          id="message"
          placeholder="Message"
          type="text"
          required
        />
      </InputGroup>
    </Col>
  )
}

export function FormActions({
  showSpinner,
}: {
  showSpinner: boolean
}): JSX.Element {
  return (
    <Col xs={12}>
      <div className="mt-4 d-flex">
        <Button variant="dark" type="submit">
          Submit Form
        </Button>
        <Button variant="outline-dark" type="reset" className="ms-3">
          Reset
        </Button>
        {showSpinner && (
          <div className="ms-auto">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
      </div>
    </Col>
  )
}
