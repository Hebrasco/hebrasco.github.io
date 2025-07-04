import { MISC } from 'data'
import { useLayoutEffect, useState } from 'react'
import type { WindowSize } from 'types'

function useWindowSize(): WindowSize {
  const [gridSizes, setGridSizes] = useState<WindowSize>({
    isLg: false,
    isMd: false,
    isMobile: false,
    isSm: false,
    isXl: false,
    isXs: false,
    isXxl: false,
    size: {
      height: 0,
      width: 0,
    },
  })
  const { bootstrapGridSizes } = MISC

  useLayoutEffect(() => {
    function updateSize() {
      const size = {
        height: window.innerHeight,
        width: window.innerWidth,
      }

      const isLg = size.width >= bootstrapGridSizes.lg && size.width < bootstrapGridSizes.xl
      const isMd = size.width >= bootstrapGridSizes.md && size.width < bootstrapGridSizes.lg
      const isSm = size.width >= bootstrapGridSizes.sm && size.width < bootstrapGridSizes.md
      const isXl = size.width >= bootstrapGridSizes.xl && size.width < bootstrapGridSizes.xxl
      const isXs = size.width < bootstrapGridSizes.sm
      const isXxl = size.width >= bootstrapGridSizes.xxl

      const isMobile = isXs || isSm

      setGridSizes({
        isLg,
        isMd,
        isMobile,
        isSm,
        isXl,
        isXs,
        isXxl,
        size,
      })
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [bootstrapGridSizes])

  return gridSizes
}

export { useWindowSize }
