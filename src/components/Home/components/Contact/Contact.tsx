import Email from 'common/Email/Email'
import Section from 'common/Section/Section'
import React from 'react'
import { Container } from 'react-bootstrap'
import { ROUTES } from 'constants/Routes'

import './Contact.css'

export default function Contact() {
  return (
    <Container>
      <Section lg title="Let's talk" bottomPadding anchor={ROUTES.contact}>
        <p>New projects, freelance inquiry or even a coffee.</p>
        <p>
          Message me at <Email />
        </p>
      </Section>
    </Container>
  )
}
