import React from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Projects from './components/Projects'

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
