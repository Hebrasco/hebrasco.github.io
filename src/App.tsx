import { init } from '@emailjs/browser'
import { Footer, NavBar } from 'components/layout'
import { CONFIG } from 'data'
import React, { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Routes } from 'routes'

export function App() {
  useEffect(() => {
    init(CONFIG.emailJs.apiKey)
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
