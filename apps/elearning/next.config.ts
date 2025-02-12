import { resolve } from 'node:path'

import bundleAnalyzer from '@next/bundle-analyzer'
import { type NextConfig } from 'next'

import { next } from 'million/compiler'
import nextIntl from 'next-intl/plugin'

type BundleAnalyzerConfig = Parameters<typeof bundleAnalyzer>[0]
type MillionConfig = Parameters<typeof next>[1]
type NextConfigMillion = Parameters<typeof next>[0]

const I18N_MIDDLEWARE = resolve(__dirname, 'src/services/i18n.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: config => ({
    ...config,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
    },
  }),
}

const bundleAnalyzerConfig: BundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
}

const millionConfig: MillionConfig = {
  auto: true,
  log: false,
  rsc: false,
  telemetry: false,
}

const withBundleAnalyzer = bundleAnalyzer(bundleAnalyzerConfig)(nextConfig)
const withNextIntl = nextIntl(I18N_MIDDLEWARE)(withBundleAnalyzer)

export default next(withNextIntl as NextConfigMillion, millionConfig)
