import React from 'react'

import './Title.css'

interface TitleProps {
  isXs?: Boolean
}

export default function Title({ isXs = false }: TitleProps) {
  const baseStyle = 'landing-title-container'
  let styles = 'd-none d-sm-block'

  if (isXs) styles = `${baseStyle}-xs d-block d-sm-none`

  return (
    <div className={`${baseStyle} ${styles}`}>
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
