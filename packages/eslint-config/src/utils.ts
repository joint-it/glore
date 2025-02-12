import { builtinModules } from 'node:module'

import type { FileOptions, NoRestrictedImportOptions, RestrictedImportGroup, SortImportGroup, SortImportsOptions } from './types'

const DEFAULT_IMPORT_GROUPS = [
  'builtin',
  'external',
  'internal',
  'parent',
  'sibling',
  'side-effect',
  'side-effect-style',
  'index',
  'object',
  'style',
  'external-type',
  'builtin-type',
  'internal-type',
  'parent-type',
  'sibling-type',
  'index-type',
  'unknown',
]

/**
 * Option for files to be included.
 */
export const fileOptions = (options: FileOptions) => {
  const { ignoreJs, ignoreTs, includeDotfiles, includeRoot, react } = options
  if (ignoreJs && ignoreTs) return []

  const prefixes = []
  if (!ignoreJs) prefixes.push('j')
  if (!ignoreTs) prefixes.push('t')

  const extension = `[${prefixes.join('')}]s${react ? '?(x)' : ''}`
  const files = [`**/*.${extension}`]

  if (includeDotfiles) files.push(`**/.*.${extension}`)
  if (includeRoot) {
    files.push(`*.${extension}`)
    if (includeDotfiles) files.push(`.*.${extension}`)
  }

  return files
}

/**
 * Options for JSX files to be included.
 */
export const jsxFileOptions = (options: FileOptions) => fileOptions({ ...options, react: true })

/**
 * Options for configuration files to be included.
 */
export const configFileOptions = (options: FileOptions) => {
  const { ignoreJs, ignoreTs } = options
  if (ignoreJs && ignoreTs) return []

  const prefixes = []
  if (!ignoreJs) prefixes.push('j')
  if (!ignoreTs) prefixes.push('t')

  return prefixes.length === 1 ? [`*.config.${prefixes[0]}s`] : [`*.config.[${prefixes.join('')}]s`]
}

/**
 * Builds import options for the `no-restricted-imports` rule using custom imports.
 *
 * @see {@link https://eslint.org/docs/rules/no-restricted-imports}
 */
export const noRestrictedImportsOptions = (options: NoRestrictedImportOptions = {}) => {
  const { allowRelativeImports, namedImports = [], restrictedImports = [], useNodePrefix } = options

  const rule = {
    paths: namedImports.map(name => ({
      importNames: ['default'],
      message: 'Use named imports instead.',
      name,
    })),
    patterns: [] as RestrictedImportGroup[],
  }

  if (allowRelativeImports === 'never')
    rule.patterns.push({
      group: ['./**/*', '../**/*'],
      message: 'Relative imports are not allowed, use path aliases instead.',
    })
  if (allowRelativeImports === 'siblings')
    rule.patterns.push({
      group: ['../**/*'],
      message: 'Parent imports are not allowed, use path aliases instead.',
    })

  if (restrictedImports.length)
    rule.patterns.push(
      ...restrictedImports.map(pattern =>
        typeof pattern === 'string'
          ? {
              group: [pattern],
            }
          : pattern,
      ),
    )

  if (useNodePrefix === 'never')
    rule.patterns.push({
      group: ['node:*', 'node:*/**/*'],
      message: `Do not use the 'node:' prefix for built-in modules.`,
    })
  if (useNodePrefix === 'always')
    rule.patterns.push({
      group: builtinModules
        .filter(name => !name.includes('constants'))
        .map(name => [name, `${name}/**/*`])
        .flat(),
      message: `Use the 'node:' prefix for built-in modules.`,
    })

  return rule
}

/**
 * Builds import options for the `perfectionist/sort-imports` rule using custom import groups.
 *
 * @see {@link https://perfectionist.dev/rules/sort-imports}
 */
export const sortImportsOptions = (options: SortImportsOptions = {}) => {
  const { importGroups = [], internalImports = [], newlinesBetweenGroups, tsconfigRootDir } = options

  const customGroups = importGroups.flat().reduce<SortImportGroup>((groups, group) => {
    if (DEFAULT_IMPORT_GROUPS.includes(group)) return groups

    const regexName = group.replace('*', '.*')
    const patterns = [new RegExp(`^${regexName}$`), new RegExp(`^${regexName}/.*`)]

    return {
      type: { ...groups.type, [group]: patterns },
      value: { ...groups.value, [group]: patterns },
    }
  }, {} as SortImportGroup)

  return {
    customGroups: Object.keys(customGroups).length ? customGroups : undefined,
    groups: importGroups,
    internalPattern: internalImports,
    newlinesBetween: newlinesBetweenGroups,
    tsconfigRootDir,
  }
}
