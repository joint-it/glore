import jointConfig from '@joint-it/eslint-config'

export default jointConfig({
  importGroups: [
    ['side-effect', 'side-effect-style'],
    'builtin',
    ['react', 'next', '@next'],
    ['external'],
    '@joint-it',
    'internal',
    ['parent', 'index', 'sibling'],
  ],
  internalImports: ['config', 'supabase'],
  maxLines: 400,
  namedImports: ['react'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'arrow-body-style': ['error', 'as-needed'],
      },
    },
    {
      ignores: ['src/theme/*.ts'],
      rules: {
        'no-restricted-imports': [
          2,
          {
            patterns: [
              {
                group: ['class-variance-authority', 'clsx', 'tailwind-merge'],
                message: 'Import from the internal theme module instead.',
              },
            ],
          },
        ],
      },
    },
  ],
  react: 'next.js',
  sortArrayValues: ['src/**/*.ts?(x)'],
  sortObjectKeys: ['*.ts', 'src/app/**/*.ts?(x)'],
  tailwindCss: true,
})
