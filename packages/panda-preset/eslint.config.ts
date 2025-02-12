import jointConfig from '@jointorg/eslint-config'

export default jointConfig({
  importGroups: [
    ['side-effect', 'side-effect-style'],
    'builtin',
    'external',
    ['@jointorg', 'package.json'],
    'internal',
    ['parent', 'index', 'sibling'],
  ],
  maxLines: 400,
  sortObjectKeys: false,
})
