import prettierConfig from '@glore/prettier-config'

/** @type {import('prettier').Options} */
export default {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'cva', 'tw', 'twMerge'],
  tailwindStylesheet: './src/app/globals.css',
}
