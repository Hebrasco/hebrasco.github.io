import { ROUTES } from 'data'
import { Home, Imprint, Project } from 'pages'
import { useEffect } from 'react'
import { Routes as BrowserRoutes, Route, useLocation } from 'react-router-dom'
import { scrollIntoView } from 'utils'

function Routes() {
  const { pathname, hash } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is needed for navigation and scrolling to the top of the page
  useEffect(() => {
    const scrollToOrigin = !hash && !!window.scrollY

    if (scrollToOrigin) {
      window.scrollTo({
        behavior: 'instant' as ScrollBehavior,
        left: 0,
        top: 0,
      })
    }

    scrollIntoView(hash)
  }, [pathname, hash])

  return (
    <BrowserRoutes>
      <Route element={<Home />} path={ROUTES.home} />
      <Route element={<Imprint />} path={ROUTES.imprint} />
      <Route element={<Project />} path={ROUTES.project} />
      <Route element={<Home />} path="*" />
    </BrowserRoutes>
  )
}

export { Routes }
