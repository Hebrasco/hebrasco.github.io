import React, { FormEvent, useState } from 'react'
import { Email, Section } from 'common'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { ROUTES } from 'constants/routes'
import emailjs from '@emailjs/browser'
import {
  Name,
  Subject,
  Message,
  Actions,
  EmailSuccessToast,
} from './components'

export default function Contact() {
  const [validated, setValidated] = useState<boolean>(false)
  const [isEmailSuccess, setIsEmailSuccess] = useState<boolean | null>(null)
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false)
  const [showEmailSuccessToast, setShowEmailSuccessToast] =
    useState<boolean>(false)

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget

    if (form.checkValidity()) {
      setIsEmailSending(true)
      sendEmail(form, () => setIsEmailSending(false))
    }

    setValidated(true)
  }

  function handleFormReset() {
    setValidated(false)
    setIsEmailSuccess(null)
  }

  function sendEmail(form: HTMLFormElement, onFinally: () => void) {
    emailjs
      .send('service_w4iza8l', 'template_hc62tmb', {
        fromName: form.fromName.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(handleEmailSuccess, handleEmailError)
      .finally(onFinally)
  }

  function handleEmailSuccess(result: any) {
    setIsEmailSuccess(result.status === 200)
    setShowEmailSuccessToast(true)
  }

  function handleEmailError() {
    setIsEmailSuccess(false)
  }

  return (
    <Container>
      <Section lg title="Let's talk" bottomPadding anchor={ROUTES.contact}>
        <p className="m-0">New projects, freelance inquiry or even a coffee.</p>
        <Col xs={12} md={6}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
            onReset={handleFormReset}
            className="my-5"
          >
            <Row>
              <Name />
              <Email />
              <Subject />
              <Message />
              <Actions showSpinner={isEmailSending} />
            </Row>
          </Form>
        </Col>
        <Col>
          <p className="mb-0">Email me</p>
          <Email />
        </Col>
      </Section>
      <EmailSuccessToast
        show={showEmailSuccessToast}
        isSuccessful={isEmailSuccess}
        onClose={() => setShowEmailSuccessToast(false)}
      />
    </Container>
  )
}
