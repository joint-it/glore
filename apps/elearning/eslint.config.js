import { configNextjs } from '@glore/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default configNextjs({
  sortArrayValues: ['src/**/*.ts?(x)'],
  sortKeys: ['src/**/*.ts?(x)'],
  imports: {
    newlinesBetweenInternals: false,
  },
})
