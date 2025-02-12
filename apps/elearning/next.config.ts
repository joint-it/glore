import bundleAnalyzer from '@next/bundle-analyzer'
import { type NextConfig } from 'next'

import { next } from 'million/compiler'
import nextIntl from 'next-intl/plugin'

import { Env } from '@/lib/env'

type BundleAnalyzerConfig = Parameters<typeof bundleAnalyzer>[0]
type MillionConfig = Parameters<typeof next>[1]
type NextConfigMillion = Parameters<typeof next>[0]

const I18N_MIDDLEWARE = './src/services/i18n.ts'
const tsconfigPath = Env.isProduction ? 'tsconfig.build.json' : 'tsconfig.json'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
  webpack: config => ({
    ...config,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
    },
  }),
}

const bundleAnalyzerConfig: BundleAnalyzerConfig = {
  enabled: Env.isAnalyze,
}

const millionConfig: MillionConfig = {
  auto: true,
  log: false,
  rsc: true,
  telemetry: false,
}

const withBundleAnalyzer = bundleAnalyzer(bundleAnalyzerConfig)(nextConfig)
const withNextIntl = nextIntl(I18N_MIDDLEWARE)(withBundleAnalyzer)

export default next(withNextIntl as NextConfigMillion, millionConfig)
