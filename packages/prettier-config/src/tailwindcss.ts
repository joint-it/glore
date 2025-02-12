import { type Config } from 'prettier'
import { type PluginOptions } from 'prettier-plugin-tailwindcss'

import prettierConfig from '.'

const { plugins = [], ...options } = prettierConfig

const tailwindOptions: PluginOptions = {
  tailwindFunctions: ['cn', 'cva', 'tw'],
  tailwindStylesheet: './src/app/globals.css',
}

export default {
  ...options,
  plugins: [...plugins, 'prettier-plugin-tailwindcss'],
  ...tailwindOptions,
} satisfies Config
