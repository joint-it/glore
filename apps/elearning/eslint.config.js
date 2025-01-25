import { configNextjs } from '@glore/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configNextjs({
    sortArrayValues: ['src/**/*.ts?(x)'],
    sortKeys: ['src/**/*.ts?(x)'],
    imports: {
      external: ['class-variance-authority'],
      newlinesBetweenInternals: false,
    },
  }),
  {
    files: ['src/lib/**/*.ts?(x)'],
    rules: {
      'no-restricted-imports': 0,
    },
  },
]
