import React from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'

export function Subject(): JSX.Element {
  return (
    <Col xs={12}>
      <InputGroup className="mb-3">
        <Form.Control id="subject" placeholder="Subject" type="text" required />
      </InputGroup>
    </Col>
  )
}
