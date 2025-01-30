import stylisticPlugin from '@stylistic/eslint-plugin'
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts'
import gitignoreConfig from 'eslint-config-flat-gitignore'
import importPlugin from 'eslint-plugin-import'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'
import sortKeysPlugin from 'eslint-plugin-sort-keys-fix'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

import repoPlugin from '../plugins/glore.js'
import { mergeConfigOptions, noRestrictedImports, sortImports } from '../utils.js'

/**
 * @typedef {import('eslint').Linter.Config[]} ConfigBase
 * @typedef {import('../utils').ConfigOptions} ConfigBaseOptions
 */

/** @type {ConfigBaseOptions} */
export const CONFIG_BASE_OPTIONS = {
  include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  imports: {
    named: ['node:*'],
    restricted: [],
    external: [],
    internal: ['@glore'],
    allowRelative: 'ignore',
    newlinesBetween: 'always',
    newlinesBetweenExternals: true,
    newlinesBetweenInternals: true,
    useNodePrefix: 'always',
    sortImportsOptions: {
      sortSideEffects: true,
    },
  },
  sortArrayValues: [],
  sortKeys: [],
}

/**
 * Function returning a custom base ESLint configuration.
 *
 * @param {ConfigBaseOptions} options - Options for the configuration.
 * @return {ConfigBase}
 */
const configBase = (options = {}) => {
  const opts = mergeConfigOptions(CONFIG_BASE_OPTIONS, options)

  /** @type {ConfigBase} */
  return [
    gitignoreConfig(),
    repoPlugin.configs.default,
    {
      name: 'base',
      files: opts.include,
      plugins: {
        '@glore': repoPlugin,
        '@stylistic': stylisticPlugin,
        '@stylistic/ts': stylisticTsPlugin,
        perfectionist: perfectionistPlugin,
        import: importPlugin,
        prettier: prettierPlugin,
        'sort-destructure-keys': sortDestructureKeysPlugin,
        'sort-keys': sortKeysPlugin,
        'unused-imports': unusedImportsPlugin,
      },
      settings: {
        ...(opts.imports.internal.length && {
          'import/internal-regex': `^(${opts.imports.internal.join('|')})/`,
        }),
      },
      rules: {
        'arrow-body-style': [2, 'as-needed'],
        'comma-dangle': [2, 'always-multiline'],
        eqeqeq: [2, 'always'],
        'func-style': [2, 'expression'],
        'max-lines': 2,
        'no-console': [1, { allow: ['error', 'warn'] }],
        'no-duplicate-imports': [2, { includeExports: true }],
        'no-restricted-imports': [2, noRestrictedImports(opts.imports)],
        'no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
          },
        ],
        'no-var': 2,
        'object-shorthand': [2, 'always'],
        'prefer-arrow-callback': [
          2,
          {
            allowNamedFunctions: true,
          },
        ],
        'prefer-const': [
          2,
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
          },
        ],
        'prefer-template': 2,
        'sort-vars': [
          1,
          {
            ignoreCase: false,
          },
        ],
        '@stylistic/array-bracket-newline': [2, 'consistent'],
        '@stylistic/array-bracket-spacing': [2, 'never'],
        '@stylistic/array-element-newline': [2, 'consistent'],
        '@stylistic/eol-last': 2,
        '@stylistic/jsx-curly-brace-presence': [
          2,
          {
            props: 'never',
            children: 'always',
            propElementValues: 'always',
          },
        ],
        '@stylistic/max-len': [
          2,
          {
            code: 140,
            ignoreStrings: true,
            ignoreUrls: true,
          },
        ],
        '@stylistic/no-extra-semi': 2,
        '@stylistic/no-multi-spaces': 2,
        '@stylistic/no-multiple-empty-lines': [
          2,
          {
            max: 1,
          },
        ],
        '@stylistic/no-trailing-spaces': 2,
        '@stylistic/object-curly-spacing': [2, 'always'],
        '@stylistic/quotes': [
          2,
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        '@stylistic/template-curly-spacing': [2, 'never'],
        'import/first': 2,
        'import/newline-after-import': [
          2,
          {
            exactCount: true,
            considerComments: true,
          },
        ],
        'import/no-absolute-path': 0,
        'import/no-amd': 2,
        'import/no-commonjs': 2,
        'import/no-deprecated': 2,
        'import/no-duplicates': [
          2,
          {
            'prefer-inline': true,
          },
        ],
        'import/no-empty-named-blocks': 2,
        'import/no-mutable-exports': 2,
        'import/no-self-import': 2,
        'import/no-useless-path-segments': [
          2,
          {
            noUselessIndex: true,
          },
        ],
        'perfectionist/sort-exports': 2,
        'perfectionist/sort-imports': [2, sortImports(opts.imports)],
        'perfectionist/sort-named-exports': [
          2,
          {
            groupKind: 'values-first',
            partitionByNewLine: true,
          },
        ],
        'perfectionist/sort-named-imports': [
          2,
          {
            type: 'alphabetical',
            groupKind: 'values-first',
          },
        ],
        'prettier/prettier': 2,
        'unused-imports/no-unused-imports': 2,
      },
    },
    opts.sortArrayValues?.length
      ? {
          files: opts.sortArrayValues,
          rules: {
            '@glore/sort-array-values': 2,
          },
        }
      : {},
    opts.sortKeys?.length
      ? {
          files: opts.sortKeys,
          rules: {
            'sort-destructure-keys/sort-destructure-keys': 2,
            'sort-keys/sort-keys-fix': 2,
          },
        }
      : {},
    {
      name: 'config',
      files: ['^*config.[jt]s'],
      rules: {
        'max-lines': 0,
        'no-restricted-imports': 0,
        '@stylistic/array-element-newline': 0,
        '@stylistic/max-len': 0,
        'import/no-anonymous-default-export': 0,
      },
    },
  ]
}

export default configBase
