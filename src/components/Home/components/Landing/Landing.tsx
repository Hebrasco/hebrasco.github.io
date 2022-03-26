import './Landing.css'

import React from 'react'
import Title from './components/Title/Title'
import Image from './components/Image/Image'
import { useWindowSize } from 'utils/hooks'
import ScrollDownIcon from './components/ScrollDownIcon/ScrollDownIcon'

export default function Landing(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <div className="landing-container">
      <Title isXs={isXs} />
      <Image isXs={isXs} isSm={isSm} />
      <ScrollDownIcon />
    </div>
  )
}
