import { CONFIG } from 'data'
import React from 'react'
import { Image, Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  show: boolean
  isSuccessful: boolean | null
  onClose: Function
}

export default function EmailSuccessToast({
  show,
  onClose,
  isSuccessful,
}: Props): JSX.Element {
  const emailSuccessMessage =
    "Thank you for contacting me. I'll respond to your message soon."
  const emailErrorMessage =
    'Something went wrong. Please try again later. Alternative, you can send me an email.'

  return (
    <ToastContainer position="bottom-end" className="p-3 position-fixed">
      <Toast onClose={() => onClose()} show={show} delay={7000} autohide>
        <Toast.Header>
          <Image src="/favicon.ico" className="rounded me-2" />
          <strong className="me-auto">{CONFIG.profile.name}</strong>
        </Toast.Header>
        <Toast.Body>
          {isSuccessful ? emailSuccessMessage : emailErrorMessage}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
