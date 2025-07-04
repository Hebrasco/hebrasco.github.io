import { useWindowSize } from 'hooks/useWindowSize'
import { useLayoutEffect, useMemo, useState } from 'react'

export function useScrollSnapAlign() {
  const [scrollSnapAlign, setScrollSnapAlign] = useState('start')
  const { isXs, isSm } = useWindowSize()
  const isMobile = useMemo(() => isXs || isSm, [isXs, isSm])

  useLayoutEffect(() => {
    setScrollSnapAlign(isMobile ? 'center' : 'start')
  }, [isMobile])

  return scrollSnapAlign
}
