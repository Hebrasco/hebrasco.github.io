import React from 'react'
import { ROUTES } from 'constants/routes'
import { Container, Row } from 'react-bootstrap'
import Section from 'common/Section/Section'
import { AboutText, Actions, Skills } from './AboutMeItems'

export default function AboutMe(): JSX.Element {
  return (
    <Container>
      <Row>
        <Section lg title="About me" anchor={ROUTES.aboutMe}>
          <AboutText />
          <Actions />
          <Skills />
        </Section>
      </Row>
    </Container>
  )
}
