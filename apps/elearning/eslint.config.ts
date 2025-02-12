import jointConfig from '@jointorg/eslint-config'

export default jointConfig({
  importGroups: [
    ['side-effect', 'side-effect-style'],
    'builtin',
    ['react', 'next', '@next'],
    ['external'],
    'internal',
    ['parent', 'index', 'sibling'],
  ],
  internalImports: ['config', 'styled-system', 'supabase'],
  maxLines: 400,
  overrides: [
    {
      files: ['src/theme/**/*.ts?(x)'],
      rules: {
        'no-restricted-imports': 0,
      },
    },
  ],
  pandaCss: true,
  react: 'next',
  restrictedImports: [
    {
      group: ['@jointorg/panda-preset'],
      message: 'Import from the internal theme module instead.',
    },
    {
      message: 'Only import from the main component module.',
      regex: '@/components/.*/_.*',
    },
  ],
  sortArrayValues: ['src/**/*.ts?(x)'],
  sortObjectKeys: ['*.ts', 'src/app/**/*.ts?(x)'],
})
