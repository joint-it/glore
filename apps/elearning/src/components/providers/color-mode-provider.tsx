import { ThemeProvider, type ThemeProviderProps } from 'next-themes'

export interface ColorModeProviderProps extends ThemeProviderProps {}

const ColorModeProvider = (props: ColorModeProviderProps) => <ThemeProvider attribute="class" {...props} />
export default ColorModeProvider
