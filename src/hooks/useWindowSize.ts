import { MISC } from 'data'
import { useLayoutEffect, useState } from 'react'
import { WindowSize } from 'types'

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const { bootstrapGridSizes } = MISC

  const isXs = size.width < bootstrapGridSizes.sm
  const isSm =
    size.width >= bootstrapGridSizes.sm && size.width < bootstrapGridSizes.md
  const isMd =
    size.width >= bootstrapGridSizes.md && size.width < bootstrapGridSizes.lg
  const isLg =
    size.width >= bootstrapGridSizes.lg && size.width < bootstrapGridSizes.xl
  const isXl =
    size.width >= bootstrapGridSizes.xl && size.width < bootstrapGridSizes.xxl
  const isXxl = size.width >= bootstrapGridSizes.xxl

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return { size, isXs, isSm, isMd, isLg, isXl, isXxl }
}
