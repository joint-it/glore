import { type Metadata } from 'next'

import config from '@/lib/config'

const { author, description, email, image, phone, slogan, title, url } = config

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title,
  },
  applicationName: title,
  authors: author,
  category: 'Shopping',
  creator: author.name,
  icons: [
    {
      sizes: '96x96',
      type: 'image/png',
      url: '/favicon-96x96.png',
    },
    {
      type: 'image/svg+xml',
      url: '/favicon.svg',
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
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    alternateLocale: 'en_US',
    countryName: 'Italy',
    description,
    emails: email,
    images: image,
    locale: 'it_IT',
    phoneNumbers: phone,
    siteName: title,
    title: `${title} - ${slogan}`,
    ttl: 60,
    url,
  },
  title: `${title} - ${slogan}`,
}
