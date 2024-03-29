import emailjs from '@emailjs/browser'
import { CONFIG } from 'data'
import React, { FormEvent, useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import {
  Actions,
  Email,
  EmailSuccessToast,
  Message,
  Name,
  Subject,
} from './components'

export function ContactForm() {
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

  function handleEmailSuccess(result: any) {
    setIsEmailSuccess(result.status === 200)
    setShowEmailSuccessToast(true)
  }

  function handleEmailError() {
    setIsEmailSuccess(false)
  }

  function sendEmail(form: HTMLFormElement, onFinally: () => void) {
    emailjs
      .send(CONFIG.emailJs.serviceId, CONFIG.emailJs.templateId, {
        fromName: form.fromName.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(handleEmailSuccess, handleEmailError)
      .finally(onFinally)
  }

  return (
    <>
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
      <EmailSuccessToast
        show={showEmailSuccessToast}
        isSuccessful={isEmailSuccess}
        onClose={() => setShowEmailSuccessToast(false)}
      />
    </>
  )
}
