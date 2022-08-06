import { MISC } from 'data'
import { useLayoutEffect, useState } from 'react'
import { WindowSize } from 'types'

export default function useWindowSize(): WindowSize {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const { BOOTSTRAP_GRID_SIZES } = MISC

  const isXs = size.width < BOOTSTRAP_GRID_SIZES.sm
  const isSm =
    size.width >= BOOTSTRAP_GRID_SIZES.sm &&
    size.width < BOOTSTRAP_GRID_SIZES.md
  const isMd =
    size.width >= BOOTSTRAP_GRID_SIZES.md &&
    size.width < BOOTSTRAP_GRID_SIZES.lg
  const isLg =
    size.width >= BOOTSTRAP_GRID_SIZES.lg &&
    size.width < BOOTSTRAP_GRID_SIZES.xl
  const isXl =
    size.width >= BOOTSTRAP_GRID_SIZES.xl &&
    size.width < BOOTSTRAP_GRID_SIZES.xxl
  const isXxl = size.width >= BOOTSTRAP_GRID_SIZES.xxl

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
