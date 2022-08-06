import { MISC } from 'data'
import { useEffect, useState } from 'react'

const { COLOR_SCHEMES } = MISC

export default function useColorScheme(): string {
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
