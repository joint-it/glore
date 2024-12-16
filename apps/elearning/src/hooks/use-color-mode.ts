'use client'

import { useTheme } from 'next-themes'

export const useColorModeValue = <T>(light: T, dark: T) => {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? light : dark
}

export const useColorMode = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  }
}
