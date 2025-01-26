import './globals.css'

import { type Metadata } from 'next'

import { ColorModeProvider, I18nProvider } from '@/components/providers'
import { getLocale, getMessages } from '@/services/i18n'
import config from '#/config/metadata.json'

export default async ({ children }: React.PropsWithChildren) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ColorModeProvider>
          <I18nProvider messages={messages}>{children}</I18nProvider>
        </ColorModeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: config.title,
  },
  applicationName: config.title,
  authors: config.author,
  category: 'Education',
  creator: config.author.name,
  icons: [
    {
      sizes: '96x96',
      type: 'image/png',
      url: '/favicon-96x96.png',
    },
    {
      type: 'image/svg+xml',
      url: '/logo.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
  // metadataBase: new URL(Env.URL),
  openGraph: {
    alternateLocale: 'en_US',
    countryName: 'Italy',
    description: config.description,
    emails: config.email,
    images: config.image,
    locale: 'it_IT',
    phoneNumbers: config.phone,
    siteName: config.title,
    title: `${config.title} - ${config.slogan}`,
    ttl: 60,
    url: config.url,
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  title: `${config.title} - ${config.slogan}`,
}
