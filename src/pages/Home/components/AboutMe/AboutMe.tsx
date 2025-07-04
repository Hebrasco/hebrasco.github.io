import { Section } from 'components/ui'
import { ROUTES } from 'data'
import { Container } from 'react-bootstrap'
import { AboutText, Actions, Skills } from './components'

function AboutMe() {
  return (
    <Container>
      <Section anchor={ROUTES.aboutMe} lg title="About me">
        <AboutText />
        <Actions />
        <Skills />
      </Section>
    </Container>
  )
}

export { AboutMe }
