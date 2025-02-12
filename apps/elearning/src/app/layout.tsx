import './globals.css'

import { I18nProvider } from '@/components/providers/i18n-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { withLocale } from '@/hooks/with-locale'

export default async ({ children }: React.PropsWithChildren) => {
  const [locale] = await withLocale()

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
