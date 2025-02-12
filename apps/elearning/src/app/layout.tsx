import './globals.css'

import { I18nProvider } from '@/components/providers/i18n-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { useServerLocale } from '@/hooks/use-server-locale'

export default async ({ children }: React.PropsWithChildren) => {
  const [locale] = await useServerLocale()

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export * from './metadata'
