'use client'

import { useCallback } from 'react'

import { type Theme } from '@/lib/theme'
import { useTheme as useNextTheme } from 'next-themes'

export const useTheme = () => {
  const { resolvedTheme, setTheme: setNextTheme } = useNextTheme()

  const setTheme = useCallback(
    (theme: Theme) => {
      setNextTheme(theme)
    },
    [setNextTheme],
  )

  return {
    theme: resolvedTheme as Theme,
    setTheme,
  }
}
