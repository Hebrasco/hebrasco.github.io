import { Container, Row } from 'react-bootstrap'
import { Copyright, Links } from './components'

export function Footer(): JSX.Element {
  return (
    <footer className="bg-light">
      <Container className="footer py-4">
        <Row>
          <Copyright />
          <Links />
        </Row>
      </Container>
    </footer>
  )
}
