import './globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { ThemeProvider } from '@/components/providers'
import { LocaleSwitcher } from '@/components/ui'

export default async ({ children }: React.PropsWithChildren) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="absolute bottom-8 right-8 z-50">
              <LocaleSwitcher />
            </div>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export * from './metadata'
