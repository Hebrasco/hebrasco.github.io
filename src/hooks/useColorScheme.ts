import { MISC } from 'data'
import { useEffect, useState } from 'react'

const { colorSchemes } = MISC

export function useColorScheme(): string {
  const [colorScheme, setColorScheme] = useState<string>(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? colorSchemes.dark
      : colorSchemes.light
  )

  useEffect(() => {
    const updateColorScheme = (e: any) => {
      setColorScheme(e.matches ? colorSchemes.dark : colorSchemes.light)
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
