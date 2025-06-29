import { AboutMe, Contact, Landing, Projects } from './components'

export function Home(): JSX.Element {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
