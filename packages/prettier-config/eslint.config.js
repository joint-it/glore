import { configBase } from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configBase(),
  {
    rules: {
      'import/no-useless-path-segments': 0,
    },
  },
]
