import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import { Col } from 'react-bootstrap'
import PreviewRenderer from './PreviewRenderer'

interface Props {
  images?: readonly PreviewImage[]
  mobileOnly?: boolean
}

export default function ProjectImages({
  images,
  mobileOnly = false,
}: Props): JSX.Element | null {
  if (!images) return null

  if (mobileOnly) {
    return (
      <div className="d-flex d-md-none mt-4 mb-5">
        <PreviewRenderer images={images} />
      </div>
    )
  }

  return (
    <Col className="align-items-center align-items-lg-end d-none d-md-flex">
      <PreviewRenderer images={images} />
    </Col>
  )
}
