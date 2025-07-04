import { Container, Row } from 'react-bootstrap'
import { Copyright, Links } from './components'

function Footer() {
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

export { Footer }
