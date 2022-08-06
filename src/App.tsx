import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar, Footer } from 'components/layout'
import { init } from '@emailjs/browser'
import { EMAILJS_KEY } from 'data/config'
import Routes from 'routes'

export default function App() {
  useEffect(() => {
    init(EMAILJS_KEY)
  }, [])

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </React.Fragment>
  )
}
