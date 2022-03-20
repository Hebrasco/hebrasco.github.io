import React from 'react'
import { conditionalStyle } from 'utils/helpers'

import './Title.css'

interface TitleProps {
  isXs: boolean
}

export default function Title({ isXs = false }: TitleProps) {
  const baseStyle = 'landing-title-container'

  return (
    <div
      className={`${baseStyle} ${conditionalStyle(isXs, `${baseStyle}-xs`)}`}
    >
      <div>
        <div className="landing-title">
          <h1>Hi, I am</h1>
          <h1>Daniel</h1>
          <p className="fw-light">Software developer</p>
        </div>
      </div>
    </div>
  )
}
