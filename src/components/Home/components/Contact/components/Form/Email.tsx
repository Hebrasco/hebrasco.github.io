import React from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'

export default function Email(): JSX.Element {
  return (
    <Col xs={12} lg={6}>
      <InputGroup className="mb-3">
        <Form.Control id="email" placeholder="Email" type="email" required />
      </InputGroup>
    </Col>
  )
}
