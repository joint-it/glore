import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from 'next-themes'

import { displayName } from '@/lib/utils'
import { Theme } from '@/theme/enums'

const ThemeProvider = (props: ThemeProviderProps) => (
  <NextThemeProvider attribute="class" defaultTheme={Theme.System} themes={Object.values(Theme)} {...props} />
)
ThemeProvider.displayName = displayName('ThemeProvider')

export { ThemeProvider, type ThemeProviderProps }
