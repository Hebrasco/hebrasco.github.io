import React from 'react'
import Title from './components/Title/Title'
import Image from './components/Image/Image'
import { useWindowSize } from 'utils/hooks'

import './Landing.css'

export default function Landing() {
  const { isXs, isSm } = useWindowSize()

  return (
    <div className="landing-container">
      <Title isXs={isXs} />
      <Image isXs={isXs} isSm={isSm} />
    </div>
  )
}
