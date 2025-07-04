import { MISC } from 'data'
import { useLayoutEffect, useState } from 'react'
import type { WindowSize } from 'types'

function useWindowSize(): WindowSize {
  const [gridSizes, setGridSizes] = useState<WindowSize>({
    isLg: false,
    isMd: false,
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

      setGridSizes({
        isLg: size.width >= bootstrapGridSizes.lg && size.width < bootstrapGridSizes.xl,
        isMd: size.width >= bootstrapGridSizes.md && size.width < bootstrapGridSizes.lg,
        isSm: size.width >= bootstrapGridSizes.sm && size.width < bootstrapGridSizes.md,
        isXl: size.width >= bootstrapGridSizes.xl && size.width < bootstrapGridSizes.xxl,
        isXs: size.width < bootstrapGridSizes.sm,
        isXxl: size.width >= bootstrapGridSizes.xxl,
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
