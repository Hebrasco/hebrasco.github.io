import React from 'react'
import { Col, Form, InputGroup } from 'react-bootstrap'

export default function Message(): JSX.Element {
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
