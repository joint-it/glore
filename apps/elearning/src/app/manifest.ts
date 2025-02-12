import { type MetadataRoute } from 'next'

import config from 'config/app.json'

export default () =>
  ({
    background_color: config.themeColor,
    description: config.description,
    display: 'standalone',
    icons: [
      {
        purpose: 'maskable',
        sizes: '192x192',
        src: '/web-app-manifest-192x192.png',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: '/web-app-manifest-512x512.png',
        type: 'image/png',
      },
    ],
    name: config.title,
    short_name: config.title,
    start_url: '/',
    theme_color: config.themeColor,
  }) satisfies MetadataRoute.Manifest
