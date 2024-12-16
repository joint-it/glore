import configBase from './base.js'
import configTypescript from './typescript.js'

/**
 * @typedef {import('eslint').Linter.Config[]} ConfigPackage
 * @typedef {import('../utils').ConfigOptions & {
 *  typescript?: boolean
 * }} ConfigPackageOptions
 */

/**
 * Custom ESLint configuration for built packages.
 *
 * @param {ConfigPackageOptions} options - Options for the configuration.
 * @return {ConfigPackage}
 */
const configPackage = (options = {}) => {
  if (options.typescript) {
    return [
      ...configTypescript(options),
      {
        name: 'package-ts',
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
          '@glore/require-extension': 2,
        },
      },
    ]
  }

  return [
    ...configBase(options),
    {
      name: 'package',
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'import/extensions': [2, 'always'],
      },
    },
  ]
}

export default configPackage
