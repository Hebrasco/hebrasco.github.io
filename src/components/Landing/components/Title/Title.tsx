import React from 'react'

import './Title.css'

interface TitleProps {
  isXs?: Boolean
}

export default function Title({ isXs = false }: TitleProps) {
  const baseStyle = 'landing-title-container'

  return (
    <div className={`${baseStyle} ${isXs && `${baseStyle}-xs`}`}>
      <div>
        <div className="landing-title">
          <h1>Hi, I am</h1>
          <h1>Daniel</h1>
          <p>Software developer</p>
        </div>
      </div>
    </div>
  )
}
