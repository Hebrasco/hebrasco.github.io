import React from 'react'
import { AboutMe, Contact, Landing, Projects } from './components'

export default function Home(): JSX.Element {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
