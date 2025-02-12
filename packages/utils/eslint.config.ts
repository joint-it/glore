import jointConfig from '@jointorg/eslint-config'

export default [
  ...jointConfig({
    internalImports: ['@jointorg'],
  }),
  {
    files: ['src/**/*.ts'],
    rules: {
      'no-empty': 0,
      '@typescript-eslint/no-require-imports': 0,
    },
  },
]
