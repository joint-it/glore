import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from 'next-themes'

import { Theme } from '@/theme/enums'

const ThemeProvider = (props: ThemeProviderProps) => (
  <NextThemeProvider attribute="class" defaultTheme={Theme.Auto} themes={Object.values(Theme)} {...props} />
)

export { ThemeProvider, type ThemeProviderProps }
