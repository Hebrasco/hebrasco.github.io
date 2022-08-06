import { Section } from 'components/ui'
import { ROUTES } from 'data'
import React from 'react'
import { Container } from 'react-bootstrap'
import { AboutText, Actions, Skills } from './components'

export default function AboutMe(): JSX.Element {
  return (
    <Container>
      <Section lg title="About me" anchor={ROUTES.aboutMe}>
        <AboutText />
        <Actions />
        <Skills />
      </Section>
    </Container>
  )
}
