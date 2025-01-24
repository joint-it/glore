'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export interface ThemeProviderProps extends React.ComponentProps<typeof NextThemesProvider> {}

export const ThemeProvider = (props: ThemeProviderProps) => <NextThemesProvider attribute="class" {...props} />
