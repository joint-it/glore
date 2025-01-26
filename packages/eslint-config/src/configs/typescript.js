import eslint from '@eslint/js'
import typescript from 'typescript-eslint'

import configBase from './base.js'

/**
 * @typedef {import('eslint').Linter.Config[]} ConfigTypescript
 * @typedef {import('../utils').ConfigOptions} ConfigTypescriptOptions
 */

/**
 * Custom ESLint configuration for TypeScript projects.
 *
 * @param {ConfigTypescriptOptions} options - Options for the configuration.
 * @return {ConfigTypescript}
 */
const configTypescript = (options = {}) => [
  ...configBase(options),
  ...typescript.config(
    {
      ignores: ['**/*.?(c|m)js'],
    },
    eslint.configs.recommended,
    typescript.configs.recommendedTypeChecked,
    typescript.configs.strictTypeChecked,
    {
      name: 'typescript',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: '.',
        },
      },
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
      rules: {
        'no-unused-vars': 0,
        '@stylistic/ts/member-delimiter-style': [
          2,
          {
            multiline: {
              delimiter: 'none',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          2,
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: false,
          },
        ],
        '@typescript-eslint/no-empty-object-type': [
          2,
          {
            allowInterfaces: 'always',
          },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-redundant-type-constituents': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-useless-empty-export': 2,
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/prefer-reduce-type-parameter': 0,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/restrict-template-expressions': [
          2,
          {
            allowNumber: true,
          },
        ],
      },
    },
    {
      name: 'types',
      files: ['**/*.d.ts', '**/types.ts'],
      rules: {
        'max-lines': 0,
      },
    },
  ),
]

export default configTypescript
