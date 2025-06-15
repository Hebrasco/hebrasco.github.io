import React from 'react'
import { Col } from 'react-bootstrap'
import { PreviewImage } from 'types'
import { PreviewRenderer } from './PreviewRenderer'

interface Props {
  images?: readonly PreviewImage[]
}

export function ProjectImages({ images }: Props): JSX.Element | null {
  if (!images) return null
  return (
    <Col className="mt-4 mb-5">
      <PreviewRenderer images={images} />
    </Col>
  )
}
