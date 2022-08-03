import { useLayoutEffect, useState, useEffect } from 'react'
import { gridSizes } from 'data/misc/bootstrapGrid'
import IWindowSize from 'components/interfaces/IWindowSize'
import { COLOR_SCHEMES } from 'data/misc/colorSchemes'

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

export function useColorScheme(): string {
  const [colorScheme, setColorScheme] = useState<string>(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? COLOR_SCHEMES.dark
      : COLOR_SCHEMES.light
  )

  useEffect(() => {
    const updateColorScheme = (e: any) => {
      setColorScheme(e.matches ? COLOR_SCHEMES.dark : COLOR_SCHEMES.light)
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', updateColorScheme)

    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', updateColorScheme)
  }, [])

  return colorScheme
}
