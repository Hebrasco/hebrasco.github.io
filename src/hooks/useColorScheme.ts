import { MISC } from 'data'
import { useEffect, useState } from 'react'
import type { ColorScheme } from 'types/ColorScheme'

const { colorSchemes } = MISC

interface UseColorScheme {
  colorScheme: ColorScheme
}

function useColorScheme(): UseColorScheme {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? colorSchemes.dark
      : colorSchemes.light
  )

  useEffect(() => {
    const updateColorScheme = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? colorSchemes.dark : colorSchemes.light)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateColorScheme)

    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', updateColorScheme)
  }, [])

  return { colorScheme }
}

export { useColorScheme }
