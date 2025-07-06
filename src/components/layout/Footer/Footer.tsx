import { Container, Row } from 'components/layout'
import { Copyright, Links } from './components'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={`primary-bg ${styles.footer}`}>
      <Container className="pv-4">
        <Row>
          <Copyright />
          <Links />
        </Row>
      </Container>
    </footer>
  )
}

export { Footer }
