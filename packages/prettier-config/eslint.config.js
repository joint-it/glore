import { configPackage } from '@glore/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configPackage(),
  {
    rules: {
      'import/no-useless-path-segments': 0,
    },
  },
]
