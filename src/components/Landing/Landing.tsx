import React from 'react'
import Title from './components/Title/Title'
import Image from './components/Image/Image'

import './Landing.css'

export default function Landing() {
  return (
    <div className="landing-container navbar-spacer">
      <Title />
      <Title isXs />
      <Image />
      <Image isXs />
      <Image isSm />
    </div>
  )
}
