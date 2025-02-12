import jointPreset from '@jointorg/panda-preset'
import { defineConfig } from '@pandacss/dev'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  clean: isProduction,
  gitignore: false,
  hash: isProduction,
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  lightningcss: true,
  minify: isProduction,
  preflight: true,
  presets: [jointPreset],
  shorthands: true,
  strictPropertyValues: true,
  strictTokens: true,
  watch: !isProduction,
})
