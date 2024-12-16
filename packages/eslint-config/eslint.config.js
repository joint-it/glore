import { configPackage } from './src/index.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configPackage({
    imports: {
      internal: ['deepmerge'],
    },
  }),
  {
    rules: {
      'max-lines': 0,
      'no-restricted-imports': 0,
      'import/no-useless-path-segments': 0,
    },
  },
]
