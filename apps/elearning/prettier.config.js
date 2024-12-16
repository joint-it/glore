import prettierConfig from '@glore/prettier-config'

/** @type {import('prettier').Options} */
export default {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/app/globals.css',
}
