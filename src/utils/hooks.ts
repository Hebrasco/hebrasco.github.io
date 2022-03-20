import { gridSizes } from 'constants/bootstrapGrid'
import { useLayoutEffect, useState } from 'react'

export function useWindowSize() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: windowWidth, height: windowHeight })
    }

    window.addEventListener('resize', updateSize)

    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const isXs = windowWidth < gridSizes.sm

  const isSm = windowWidth >= gridSizes.sm && windowWidth < gridSizes.md

  const isMd = windowWidth >= gridSizes.md && windowWidth < gridSizes.lg

  const isLg = windowWidth >= gridSizes.lg && windowWidth < gridSizes.xl

  const isXl = windowWidth >= gridSizes.xl && windowWidth < gridSizes.xxl

  const isXxl = windowWidth >= gridSizes.xxl

  return { size, isXs, isSm, isMd, isLg, isXl, isXxl }
}
