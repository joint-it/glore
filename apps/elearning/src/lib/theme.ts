import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import config from '@/lib/config'

const customConfig = defineConfig({
  cssVarsPrefix: config.name,
  globalCss: {
    'body > div:first-of-type': {
      minHeight: '100vh',
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
