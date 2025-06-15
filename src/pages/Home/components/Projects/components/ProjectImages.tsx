import React from 'react'
import { PreviewImage } from 'types'
import { PreviewRenderer } from './PreviewRenderer'

interface Props {
  images?: readonly PreviewImage[]
}

export function ProjectImages({ images }: Props): JSX.Element | null {
  if (!images) return null
  return <PreviewRenderer images={images} />
}
