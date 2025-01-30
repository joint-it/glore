import { configNextjs } from '@glore/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configNextjs({
    sortArrayValues: ['src/**/*.ts?(x)'],
    sortKeys: ['src/app/*.ts?(x)', 'src/components/*.ts?(x)'],
    imports: {
      internal: ['#'],
      newlinesBetweenInternals: false,
    },
  }),
  {
    files: ['src/components/**/*.ts?(x)'],
    rules: {
      'no-restricted-imports': [
        2,
        {
          patterns: [
            {
              group: ['class-variance-authority', 'class-variance-authority/*', 'clsx', 'tailwind-merge'],
              message: "Please use the corresponding internal import from '@/lib/cva'.",
            },
          ],
        },
      ],
    },
  },
]
