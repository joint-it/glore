import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

import deepMerge from 'deepmerge'

import configTypescript from './typescript.js'

/**
 * Custom ESLint configuration for Next.js projects.
 *
 * @param {import('../utils.js').ConfigOptions} options - Options for the configuration.
 * @return {import('eslint').Linter.Config[]}
 */
const configNextjs = (options = {}) => [
  ...configTypescript(
    deepMerge(
      {
        imports: {
          named: ['react', 'react-dom'],
          external: ['react', 'react-*', 'next'],
        },
      },
      options,
    ),
  ),
  {
    name: 'nextjs',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
]

export default configNextjs
