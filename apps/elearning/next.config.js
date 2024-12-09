import NextBundleAnalyzer from '@next/bundle-analyzer'
import { next } from 'million/compiler'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
}

/**
 * @type {Parameters<typeof NextBundleAnalyzer>[0]}
 */
const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
}

/**
 * @type {Parameters<typeof next>[1]}
 */
const millionConfig = {
  auto: true,
  log: false,
  rsc: true,
  telemetry: false,
}

export default next(NextBundleAnalyzer(bundleAnalyzerConfig)(nextConfig), millionConfig)
