import { useWindowSize } from 'hooks/useWindowSize'
import { useLayoutEffect, useState } from 'react'

function useScrollSnapAlign() {
  const [scrollSnapAlign, setScrollSnapAlign] = useState('start')
  const { isMobile } = useWindowSize()

  useLayoutEffect(() => {
    setScrollSnapAlign(isMobile ? 'center' : 'start')
  }, [isMobile])

  return scrollSnapAlign
}

export { useScrollSnapAlign }
