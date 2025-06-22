import React from 'react'
import { AboutMe, Landing, Projects } from './components'

export function Home(): JSX.Element {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
    </>
  )
}
