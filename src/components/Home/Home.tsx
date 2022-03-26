import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Landing from './components/Landing/Landing'
import Projects from './components/Projects/Projects'

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
