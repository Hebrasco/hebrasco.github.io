import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Copyright, Links } from './components'

export default function Footer(): JSX.Element {
  return (
    <Container fluid className="footer bg-light">
      <footer className="py-3">
        <Row>
          <Copyright />
          <Links />
        </Row>
      </footer>
    </Container>
  )
}
