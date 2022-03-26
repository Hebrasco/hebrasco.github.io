import React from 'react'
import { Col } from 'react-bootstrap'

interface Props {
  previewRender?: Function
  mobileOnly?: boolean
}

export default function ProjectImages({
  previewRender,
  mobileOnly = false,
}: Props): JSX.Element | null {
  if (!previewRender) return null

  if (mobileOnly) {
    return <div className="d-flex d-md-none mt-4 mb-5">{previewRender()}</div>
  }

  return (
    <Col className="align-items-center align-items-lg-end d-none d-md-flex">
      {previewRender()}
    </Col>
  )
}
