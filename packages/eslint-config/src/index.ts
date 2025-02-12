import eslint from '@eslint/js'
import { type Linter } from 'eslint'

// @ts-expect-error - Missing type definitions
import nextPlugin from '@next/eslint-plugin-next'
// @ts-expect-error - Missing type definitions
import pandaCssPlugin from '@pandacss/eslint-plugin'
import stylisticPlugin from '@stylistic/eslint-plugin'
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts'
import gitignoreConfig from 'eslint-config-flat-gitignore'
import prettierConfig from 'eslint-config-prettier'
// @ts-expect-error - Missing type definitions
import importPlugin from 'eslint-plugin-import'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
// @ts-expect-error - Missing type definitions
import preferArrowPlugin from 'eslint-plugin-prefer-arrow'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
// @ts-expect-error - Missing type definitions
import reactHooksPlugin from 'eslint-plugin-react-hooks'
// @ts-expect-error - Missing type definitions
import sortArrayValuesPlugin from 'eslint-plugin-sort-array-values'
// @ts-expect-error - Missing type definitions
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'
import importsPlugin from 'eslint-plugin-unused-imports'
import { config as typescriptConfig, configs as typescriptConfigs } from 'typescript-eslint'

import { RuleSeverity, type JointConfigOptions } from '@/types'
import { fileOptions, noRestrictedImportsOptions, sortImportsOptions } from '@/utils'

const DEFAULT_OPTIONS: JointConfigOptions = {
  allowRelativeImports: 'siblings',
  emptyLineAfterReturn: true,
  ignoreJs: false,
  ignoreTs: false,
  importGroups: [['side-effect', 'side-effect-style'], 'builtin', 'external', 'internal', ['parent', 'index', 'sibling']],
  includeDotfiles: false,
  includeRoot: true,
  react: false,
  maxLines: 300,
  newlineAfterImport: true,
  newlinesBetweenGroups: 'always',
  pandaCss: false,
  prettier: true,
  sortArrayValues: true,
  sortDestructuredKeys: true,
  sortInterfaces: true,
  sortObjectKeys: true,
  tsconfigRootDir: '.',
  useNodePrefix: 'always',
  typeCheck: 'strict',
  sortProps: true,
}

/**
 * Joint ESLint configuration function.
 */
const jointConfig = (options: JointConfigOptions = {}): Linter.Config[] => {
  const {
    allowRelativeImports,
    emptyLineAfterReturn,
    files: _files,
    ignoreJs,
    ignoreTs,
    ignores,
    importGroups,
    includeDotfiles,
    includeRoot,
    internalImports,
    maxLines,
    namedImports,
    newlineAfterImport,
    newlinesBetweenGroups,
    overrides,
    pandaCss,
    prettier,
    prettierIncludes,
    react,
    restrictedImports,
    sortArrayValues,
    sortDestructuredKeys,
    sortInterfaces,
    sortObjectKeys,
    sortProps,
    tsconfigRootDir,
    typeCheck,
    useNodePrefix,
  } = { ...DEFAULT_OPTIONS, ...options }

  const files = _files ?? fileOptions({ ignoreJs, ignoreTs, includeDotfiles, includeRoot, react })
  const prettierFiles = prettierIncludes ?? files

  return [
    gitignoreConfig(),
    eslint.configs.recommended,
    {
      name: '@jointorg/base',
      files,
      plugins: {
        '@stylistic': stylisticPlugin,
        import: importPlugin,
        perfectionist: perfectionistPlugin,
        'prefer-arrow': preferArrowPlugin,
        'sort-array-values': sortArrayValuesPlugin,
        'sort-destructure-keys': sortDestructureKeysPlugin,
        'unused-imports': importsPlugin,
      },
      rules: {
        '@stylistic/array-bracket-newline': [RuleSeverity.Error, 'consistent'],
        '@stylistic/array-bracket-spacing': [RuleSeverity.Error, 'never'],
        '@stylistic/array-element-newline': [RuleSeverity.Error, 'consistent'],
        '@stylistic/eol-last': RuleSeverity.Error,
        '@stylistic/max-len': RuleSeverity.Off,
        '@stylistic/no-extra-semi': RuleSeverity.Off,
        '@stylistic/no-multi-spaces': RuleSeverity.Error,
        '@stylistic/no-multiple-empty-lines': [
          RuleSeverity.Error,
          {
            max: 1,
          },
        ],
        '@stylistic/no-trailing-spaces': RuleSeverity.Error,
        '@stylistic/object-curly-spacing': [RuleSeverity.Error, 'always'],
        '@stylistic/quotes': [
          RuleSeverity.Error,
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        '@stylistic/template-curly-spacing': [RuleSeverity.Error, 'never'],
        'arrow-body-style': [RuleSeverity.Error, 'always'],
        'comma-dangle': [RuleSeverity.Error, 'always-multiline'],
        eqeqeq: [RuleSeverity.Error, 'always'],
        'func-style': [RuleSeverity.Error, 'expression'],
        ...(maxLines === -1
          ? {}
          : {
              'max-lines': [
                RuleSeverity.Error,
                {
                  max: maxLines,
                  skipBlankLines: true,
                  skipComments: true,
                },
              ],
            }),
        'no-console': [RuleSeverity.Warn, { allow: ['error', 'warn'] }],
        'no-duplicate-imports': [RuleSeverity.Error, { includeExports: true }],
        'no-restricted-imports': [
          RuleSeverity.Error,
          noRestrictedImportsOptions({ allowRelativeImports, namedImports, restrictedImports, useNodePrefix }),
        ],
        'no-unused-vars': [
          RuleSeverity.Error,
          {
            argsIgnorePattern: '^_',
          },
        ],
        'no-var': RuleSeverity.Error,
        'object-shorthand': [RuleSeverity.Error, 'always'],
        'prefer-arrow-callback': [
          RuleSeverity.Error,
          {
            allowNamedFunctions: true,
          },
        ],
        'prefer-arrow/prefer-arrow-functions': [
          RuleSeverity.Error,
          {
            allowStandaloneDeclarations: true,
            classPropertiesAllowed: true,
            disallowPrototype: true,
            singleReturnOnly: true,
          },
        ],
        'prefer-const': [
          RuleSeverity.Error,
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
          },
        ],
        'prefer-template': RuleSeverity.Error,
        ...(sortArrayValues === true
          ? {
              'sort-array-values/sort-array-values': RuleSeverity.Error,
            }
          : {}),
        ...(emptyLineAfterReturn
          ? {
              'padding-line-between-statements': [
                RuleSeverity.Error,
                { blankLine: 'always', next: '*', prev: 'break' },
                { blankLine: 'always', next: '*', prev: 'continue' },
                { blankLine: 'always', next: '*', prev: 'return' },
              ],
            }
          : {}),
        'sort-vars': [
          RuleSeverity.Error,
          {
            ignoreCase: false,
          },
        ],
        'import/exports-last': RuleSeverity.Error,
        'import/first': RuleSeverity.Error,
        ...(!newlineAfterImport
          ? {
              'import/newline-after-import': [
                RuleSeverity.Error,
                {
                  considerComments: true,
                  exactCount: true,
                },
              ],
            }
          : {}),
        'import/no-absolute-path': RuleSeverity.Off,
        'import/no-amd': RuleSeverity.Error,
        'import/no-commonjs': RuleSeverity.Error,
        'import/no-deprecated': RuleSeverity.Error,
        'import/no-duplicates': [
          RuleSeverity.Error,
          {
            'prefer-inline': true,
          },
        ],
        'import/no-empty-named-blocks': RuleSeverity.Error,
        'import/no-mutable-exports': RuleSeverity.Error,
        'import/no-self-import': RuleSeverity.Error,
        'import/no-useless-path-segments': [
          RuleSeverity.Error,
          {
            noUselessIndex: true,
          },
        ],
        'perfectionist/sort-exports': RuleSeverity.Error,
        'perfectionist/sort-imports': [
          RuleSeverity.Error,
          sortImportsOptions({ importGroups, internalImports, newlinesBetweenGroups, tsconfigRootDir }),
        ],
        'perfectionist/sort-named-imports': [
          RuleSeverity.Error,
          {
            groupKind: 'values-first',
            ignoreCase: false,
            type: 'alphabetical',
          },
        ],
        ...(sortDestructuredKeys === true
          ? {
              'sort-destructure-keys/sort-destructure-keys': RuleSeverity.Error,
            }
          : {}),
        'unused-imports/no-unused-imports': RuleSeverity.Error,
      },
    },
    Array.isArray(sortArrayValues)
      ? {
          files: sortArrayValues,
          plugins: {
            'sort-array-values': sortArrayValuesPlugin,
          },
          rules: {
            'sort-array-values/sort-array-values': RuleSeverity.Error,
          },
        }
      : {},
    Array.isArray(sortDestructuredKeys)
      ? {
          files: sortDestructuredKeys,
          rules: {
            'sort-destructure-keys/sort-destructure-keys': RuleSeverity.Error,
          },
        }
      : {},
    Array.isArray(sortObjectKeys)
      ? {
          files: sortObjectKeys,
          rules: {
            'perfectionist/sort-objects': RuleSeverity.Error,
          },
        }
      : {},
    {
      name: '@jointorg/configs',
      files: ['*.config.[jt]s'],
      rules: {
        'no-restricted-imports': RuleSeverity.Off,
        'import/newline-after-import': RuleSeverity.Off,
        'import/no-anonymous-default-export': RuleSeverity.Off,
        'sort-array-values/sort-array-values': RuleSeverity.Off,
      },
    },
    ...(ignoreTs
      ? []
      : typescriptConfig(
          {
            ignores: ['**/*.?(c|m)js'],
          },
          typescriptConfigs.stylistic,
          typeCheck !== 'none' ? typescriptConfigs.recommendedTypeChecked : {},
          typeCheck === 'strict' ? typescriptConfigs.strictTypeChecked : {},
          {
            name: '@jointorg/ts',
            languageOptions: {
              parserOptions: {
                projectService: true,
                tsconfigRootDir: '.',
              },
            },
            plugins: {
              '@stylistic/ts': stylisticTsPlugin,
              perfectionist: perfectionistPlugin,
              react: reactPlugin,
              'react-hooks': reactHooksPlugin,
              ...(react === 'next'
                ? {
                    '@next/next': nextPlugin,
                  }
                : {}),
            },
            rules: {
              'no-unused-vars': RuleSeverity.Off,
              ...(sortInterfaces
                ? {
                    'perfectionist/sort-interfaces': RuleSeverity.Error,
                  }
                : {}),
              '@stylistic/ts/member-delimiter-style': [
                RuleSeverity.Error,
                {
                  multiline: {
                    delimiter: 'none',
                    requireLast: false,
                  },
                },
              ],
              '@typescript-eslint/consistent-type-imports': [
                RuleSeverity.Error,
                {
                  disallowTypeAnnotations: false,
                  fixStyle: 'inline-type-imports',
                  prefer: 'type-imports',
                },
              ],
              '@typescript-eslint/no-empty-object-type': [
                RuleSeverity.Error,
                {
                  allowInterfaces: 'always',
                },
              ],
              '@typescript-eslint/no-explicit-any': RuleSeverity.Off,
              '@typescript-eslint/no-misused-spread': RuleSeverity.Off,
              '@typescript-eslint/no-namespace': RuleSeverity.Off,
              '@typescript-eslint/no-non-null-assertion': RuleSeverity.Off,
              '@typescript-eslint/no-redundant-type-constituents': RuleSeverity.Off,
              '@typescript-eslint/no-unnecessary-condition': RuleSeverity.Off,
              '@typescript-eslint/no-unnecessary-type-parameters': RuleSeverity.Off,
              '@typescript-eslint/no-unsafe-argument': RuleSeverity.Off,
              '@typescript-eslint/no-unsafe-assignment': RuleSeverity.Off,
              '@typescript-eslint/no-unsafe-call': RuleSeverity.Off,
              '@typescript-eslint/no-unsafe-member-access': RuleSeverity.Off,
              '@typescript-eslint/no-unsafe-return': RuleSeverity.Off,
              '@typescript-eslint/no-unused-expressions': RuleSeverity.Off,
              '@typescript-eslint/no-unused-vars': [
                RuleSeverity.Error,
                {
                  args: 'all',
                  argsIgnorePattern: '^_',
                  caughtErrors: 'all',
                  caughtErrorsIgnorePattern: '^_',
                  destructuredArrayIgnorePattern: '^_',
                  ignoreRestSiblings: true,
                  varsIgnorePattern: '^_',
                },
              ],
              '@typescript-eslint/no-useless-empty-export': RuleSeverity.Error,
              '@typescript-eslint/prefer-for-of': RuleSeverity.Error,
              '@typescript-eslint/prefer-reduce-type-parameter': RuleSeverity.Off,
              '@typescript-eslint/prefer-string-starts-ends-with': RuleSeverity.Error,
              '@typescript-eslint/restrict-template-expressions': [
                RuleSeverity.Error,
                {
                  allowNumber: true,
                },
              ],
              '@typescript-eslint/unbound-method': RuleSeverity.Off,
            },
            settings: {
              'import/resolver': {
                typescript: true,
              },
            },
          },
        )),
    Array.isArray(sortInterfaces)
      ? {
          files: sortInterfaces,
          rules: {
            'perfectionist/sort-interfaces': RuleSeverity.Error,
          },
        }
      : {},
    {
      files: ['**/*.d.ts', '**/types.ts'],
      name: '@jointorg/dts',
      rules: {
        'max-lines': RuleSeverity.Off,
      },
    },
    react
      ? {
          name: '@jointorg/react',
          plugins: {
            plugins: {
              react: reactPlugin,
              'react-hooks': reactHooksPlugin,
              ...(react === 'next'
                ? {
                    '@next/next': nextPlugin,
                  }
                : {}),
            },
          },
          rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...(react === 'next'
              ? {
                  ...nextPlugin.configs.recommended.rules,
                  ...nextPlugin.configs['core-web-vitals'].rules,
                }
              : {}),
            '@stylistic/jsx-curly-brace-presence': [
              RuleSeverity.Error,
              {
                children: 'always',
                propElementValues: 'always',
                props: 'never',
              },
            ],
            ...(sortProps
              ? {
                  'perfectionist/sort-jsx-props': RuleSeverity.Error,
                }
              : {}),
          },
        }
      : {},
    pandaCss
      ? {
          files: ['panda.config.[jt]s', '**/*.[jt]s?(x)'],
          name: '@jointorg/pandacss',
          plugins: {
            '@pandacss': pandaCssPlugin,
          },
          rules: {
            ...Object.keys(pandaCssPlugin.configs.all.rules).reduce(
              (rules, name) => ({ ...rules, [name]: RuleSeverity.Error }),
              {},
            ),
            '@pandacss/no-margin-properties': RuleSeverity.Off,
            '@pandacss/no-physical-properties': RuleSeverity.Off,
            '@pandacss/prefer-atomic-properties': RuleSeverity.Off,
            '@pandacss/prefer-composite-properties': RuleSeverity.Off,
            '@pandacss/prefer-longhand-properties': RuleSeverity.Off,
            '@pandacss/prefer-shorthand-properties': RuleSeverity.Off,
            '@pandacss/prefer-unified-property-style': RuleSeverity.Off,
          },
        }
      : {},
    ...(prettier
      ? [
          {
            files: prettierFiles,
            name: '@jointorg/prettier',
            plugins: {
              prettier: prettierPlugin,
            },
            rules: {
              'prettier/prettier': [
                RuleSeverity.Error,
                ...(typeof prettier === 'object' ? [prettier] : [{}, { usePrettierRc: true }]),
              ],
            },
          },
          prettierConfig,
          prettierPluginRecommended,
        ]
      : []),
    ...(overrides ?? []),
  ]
    .filter(config => Object.keys(config).length > 0)
    .map(config => {
      const configIgnores = [...(ignores ?? []), ...((config as Linter.Config).ignores ?? [])]
      if (configIgnores.length) return { ...config, ignores: configIgnores }
      return config
    }) as Linter.Config[]
}

export default jointConfig
export type { JointConfigOptions }
export type * from '@/types'
export * from '@/utils'
