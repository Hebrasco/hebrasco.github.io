import { ROUTES } from 'data'
import { Home, Imprint, Project } from 'pages'
import React, { useEffect } from 'react'
import { Route, Routes as BrowserRoutes, useLocation } from 'react-router-dom'

export function Routes() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToOrigin = !hash && !!window.scrollY

    if (scrollToOrigin)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      })

    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (element) element.scrollIntoView()
  }, [pathname, hash])

  return (
    <BrowserRoutes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.imprint} element={<Imprint />} />
      <Route path={ROUTES.project} element={<Project />} />
      <Route path="*" element={<Home />} />
    </BrowserRoutes>
  )
}
