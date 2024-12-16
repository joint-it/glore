import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'

import { mergeConfigOptions } from '../utils.js'
import configTypescript from './typescript.js'

/**
 * @typedef {import('eslint').Linter.Config[]} ConfigNextjs
 * @typedef {import('../utils').ConfigOptions} ConfigNextjsOptions
 */

/**
 * Custom ESLint configuration for Next.js projects.
 *
 * @param {ConfigNextjsOptions} options - Options for the configuration.
 * @return {ConfigNextjs}
 */
const configNextjs = (options = {}) => [
  ...configTypescript(
    mergeConfigOptions(
      {
        imports: {
          named: ['react', 'react-dom'],
          external: ['react', 'next', '@next'],
          allowRelative: 'siblings',
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
      'perfectionist/sort-jsx-props': 2,
    },
  },
  {
    name: 'nextjs.config',
    files: ['next.config.*'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 0,
      '@typescript-eslint/no-unsafe-return': 0,
    },
  },
]

export default configNextjs
