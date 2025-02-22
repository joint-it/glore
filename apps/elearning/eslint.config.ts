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
  maxLines: -1,
  namedImports: ['react'],
  react: 'next.js',
  sortArrayValues: ['src/**/*.ts?(x)'],
  sortObjectKeys: ['*.ts'],
  tailwindCss: true,
  useNodePrefix: 'ignore',
})
