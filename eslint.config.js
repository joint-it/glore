import { configTypescript, sortImports, withIgnores } from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default withIgnores(
  [
    ...configTypescript(),
    {
      rules: {
        'perfectionist/sort-imports': [
          2,
          sortImports({
            sortImportsOptions: {
              newlinesBetween: 'ignore',
            },
          }),
        ],
      },
    },
  ],
  ['apps', 'packages'],
)
