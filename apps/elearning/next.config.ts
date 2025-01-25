import withBundleAnalyzer from '@next/bundle-analyzer'
import { type NextConfig } from 'next'

import { next } from 'million/compiler'
import createNextIntlPlugin from 'next-intl/plugin'

type BundleAnalyzerConfig = Parameters<typeof withBundleAnalyzer>[0]
type NextConfigMillion = Parameters<typeof next>[0]
type MillionConfig = Parameters<typeof next>[1]

const I18N_REQUEST_PATH = './src/services/i18n/request.ts'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: config => ({
    ...config,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 500,
    },
  }),
}

const millionConfig: MillionConfig = {
  auto: true,
  log: false,
  rsc: false,
  telemetry: false,
}

const bundleAnalyzerConfig: BundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
}

export default createNextIntlPlugin(I18N_REQUEST_PATH)(
  next(withBundleAnalyzer(bundleAnalyzerConfig)(nextConfig) as NextConfigMillion, millionConfig),
)
