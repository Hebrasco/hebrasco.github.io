import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'constants/routes'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Home from 'components/Home'
import Imprint from 'components/Imprint'
import { init } from '@emailjs/browser'
import { EMAILJS_KEY } from 'constants/config'

export default function App() {
  useEffect(() => {
    init(EMAILJS_KEY)
  }, [])

  return (
    <React.Fragment>
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.imprint} element={<Imprint />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  )
}
