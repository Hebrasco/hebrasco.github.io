import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'constants/Routes'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Home from 'components/Home/Home'
import Imprint from 'components/Imprint/Imprint'
import { init } from '@emailjs/browser'

export default function App() {
  useEffect(() => {
    init('rmcaHWu76GpKh7M_8')
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
