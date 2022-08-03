import React, { useEffect } from 'react'
import { Route, Routes as BrowserRoutes, useLocation } from 'react-router-dom'
import { ROUTES } from 'data/routes'
import Home from 'pages/Home'
import Imprint from 'pages/Imprint'

export default function Routes() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const scrollToOrigin = hash === '' && window.scrollY

    if (scrollToOrigin) window.scrollTo(0, 0)

    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (element) element.scrollIntoView()
  }, [pathname, hash, key])

  return (
    <BrowserRoutes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.imprint} element={<Imprint />} />
      <Route path="*" element={<Home />} />
    </BrowserRoutes>
  )
}
