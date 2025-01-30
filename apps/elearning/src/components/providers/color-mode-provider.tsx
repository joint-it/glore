import { ThemeProvider, type ThemeProviderProps } from 'next-themes'

export interface ColorModeProviderProps extends ThemeProviderProps {}

export const ColorModeProvider = (props: ColorModeProviderProps) => <ThemeProvider attribute="class" {...props} />
