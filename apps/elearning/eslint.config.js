import { configNextjs } from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configNextjs(
    {
      sortKeys: ['src/app/meta.ts'],
    },
  ),
  {
    files: ['src/lib/config.ts'],
    rules: {
      '@stylistic/max-len': 0,
    }
  }
]
