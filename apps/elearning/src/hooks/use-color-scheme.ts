'use client'

import { useCallback, useMemo } from 'react'

import { useTheme } from 'next-themes'

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
}

export const useColorScheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const colorScheme = useMemo(() => {
    if (resolvedTheme === ColorScheme.Dark) return ColorScheme.Dark
    return ColorScheme.Light
  }, [resolvedTheme])

  const setColorScheme = useCallback(
    (scheme: ColorScheme) => {
      setTheme(scheme)
    },
    [setTheme],
  )

  const toggleColorScheme = useCallback(() => {
    setTheme(resolvedTheme === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark)
  }, [resolvedTheme, setTheme])

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
  }
}
