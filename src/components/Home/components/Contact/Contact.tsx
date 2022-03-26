import Email from 'common/Email/Email'
import Section from 'common/Section/Section'
import React, { FormEvent, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from 'react-bootstrap'
import { ROUTES } from 'constants/Routes'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [validated, setValidated] = useState<boolean>(false)
  const [isEmailSuccess, setIsEmailSuccess] = useState<boolean | null>(null)
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false)
  const [showEmailSuccessToast, setShowEmailSuccessToast] =
    useState<boolean>(false)
  const emailSuccessMessage =
    "Thank you for contacting me. I'll respond to your massage soon."
  const emailErrorMessage =
    'Something went wrong. Please try again later. Alternative, you can send me an email.'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget

    if (form.checkValidity()) sendEmail(form)

    setValidated(true)
  }

  function handleReset() {
    setValidated(false)
    setIsEmailSuccess(null)
  }

  function sendEmail(form: HTMLFormElement) {
    setIsEmailSending(true)
    emailjs
      .send('service_w4iza8l', 'template_hc62tmb', {
        fromName: form.fromName.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(
        (result: any) => {
          setIsEmailSuccess(result.status === 200)
          setShowEmailSuccessToast(true)
        },
        (error: any) => {
          setIsEmailSuccess(false)
        }
      )
      .finally(() => setIsEmailSending(false))
  }

  return (
    <Container>
      <Section lg title="Let's talk" bottomPadding anchor={ROUTES.contact}>
        <p className="m-0">New projects, freelance inquiry or even a coffee.</p>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="my-5"
          onReset={handleReset}
        >
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} lg={6}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      id="fromName"
                      placeholder="Name"
                      type="name"
                      required
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      id="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </InputGroup>
                </Col>
              </Row>
              <InputGroup className="mb-3">
                <Form.Control
                  id="subject"
                  placeholder="Subject"
                  type="text"
                  required
                />
              </InputGroup>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  id="message"
                  placeholder="Message"
                  type="text"
                  required
                />
              </InputGroup>
              <div className="mt-4 d-flex">
                <Button variant="dark" type="submit">
                  Submit Form
                </Button>
                <Button variant="outline-dark" type="reset" className="ms-3">
                  Reset
                </Button>
                {isEmailSending && (
                  <div className="ms-auto">
                    <div className="spinner-border" role="status"></div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col>
            <p className="mb-0">Email me</p>
            <Email />
          </Col>
        </Row>
      </Section>
      <ToastContainer position="bottom-end" className="p-3 position-fixed">
        <Toast
          onClose={() => setShowEmailSuccessToast(false)}
          show={showEmailSuccessToast}
          delay={7000}
          autohide
        >
          <Toast.Header>
            <Image src="/favicon.ico" className="rounded me-2" />
            <strong className="me-auto">Daniel Bedrich</strong>
          </Toast.Header>
          <Toast.Body>
            {isEmailSuccess ? emailSuccessMessage : emailErrorMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  )
}
