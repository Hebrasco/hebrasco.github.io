import React from 'react'
import { ROUTES } from 'constants/routes'
import { Container } from 'react-bootstrap'
import Section from 'common/Section'
import { AboutText, Actions, Skills } from './AboutMeItems'

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
