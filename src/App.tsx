import { Footer, NavBar } from 'components/layout'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Routes } from 'routes'

export function App() {
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
