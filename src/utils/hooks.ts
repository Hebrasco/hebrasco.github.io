import { gridSizes } from 'constants/bootstrapGrid'
import IWindowSize from 'interfaces/IWindowSize'
import { useLayoutEffect, useState } from 'react'

export function useWindowSize(): IWindowSize {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const isXs = size.width < gridSizes.sm
  const isSm = size.width >= gridSizes.sm && size.width < gridSizes.md
  const isMd = size.width >= gridSizes.md && size.width < gridSizes.lg
  const isLg = size.width >= gridSizes.lg && size.width < gridSizes.xl
  const isXl = size.width >= gridSizes.xl && size.width < gridSizes.xxl
  const isXxl = size.width >= gridSizes.xxl

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
