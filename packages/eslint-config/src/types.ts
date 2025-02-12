import { type Linter } from 'eslint'

import type { Options as PrettierOptions } from 'prettier'

export enum RuleSeverity {
  Off = 0,
  Warn = 1,
  Error = 2,
}

export type RestrictedImportGroup =
  | {
      group: string[]
      message?: string
    }
  | {
      regex: string
      message?: string
    }
  | {
      name: string
      importNames: string[]
      message?: string
    }

export interface SortImportGroup {
  type: Record<string, (string | RegExp)[]>
  value: Record<string, (string | RegExp)[]>
}

export interface FileOptions {
  /**
   * Patterns of files to exclude.
   */
  files?: string[]
  /**
   * Whether to ignore JavaScript files.
   *
   * @default false
   */
  ignoreJs?: boolean
  /**
   * Patterns of files and folders to ignore.
   *
   * @default true
   */
  ignores?: string[]
  /**
   * Whether to ignore TypeScript files.
   *
   * @default false
   */
  ignoreTs?: boolean
  /**
   * Whether to lint files starting with a dot.
   *
   * @default false
   */
  includeDotfiles?: boolean
  /**
   * Whether to lint files in the root directory.
   *
   * @default true
   */
  includeRoot?: boolean
  /**
   * Whether to include the React configuration, with optional support for Next.js.
   *
   * @default false
   */
  react?: boolean | 'next.js' | 'Next.js'
}

export interface NoRestrictedImportOptions {
  /**
   * Whether to allow relative imports.
   *
   * @default "siblings"
   */
  allowRelativeImports?: 'always' | 'never' | 'siblings'
  /**
   * Modules that don't allow default imports.
   */
  namedImports?: string[]
  /**
   * Groups of modules that are restricted from being imported.
   */
  restrictedImports?: string[] | RestrictedImportGroup[]
  /**
   * Whether to use the `node:` prefix for built-in modules.
   *
   * @default "always"
   */
  useNodePrefix?: 'always' | 'never' | 'ignore'
}

export interface SortImportsOptions {
  /**
   * Allows to specify a list of import groups for sorting.
   */
  importGroups?: (string | string[])[]
  /**
   * List of internal imports to match.
   */
  internalImports?: string[]
  /**
   * Whether to add newlines between import groups.
   *
   * @default "always"
   */
  newlinesBetweenGroups?: 'always' | 'never' | 'ignore'
  /**
   * Specifies the directory of the root `tsconfig.json` file.
   *
   * @default "."
   */
  tsconfigRootDir?: string
}

export interface ImportOptions extends NoRestrictedImportOptions, SortImportsOptions {
  /**
   * Whether to add a newline after the import block.
   *
   * @default false
   */
  newlineAfterImport?: boolean
}

export interface JointConfigOptions extends FileOptions, ImportOptions {
  /**
   * Whether to add a newline after the return statement.
   *
   * @default true
   */
  emptyLineAfterReturn?: boolean
  /**
   * Maximum number of lines per file. Use `-1` to disable.
   *
   * @default 300
   */
  maxLines?: number
  /**
   * Override configurations for specific files.
   */
  overrides?: Linter.Config[]
  /**
   * Whether to include the Panda CSS configuration.
   *
   * @default true
   */
  pandaCss?: boolean
  /**
   * Whether to use a Prettier configuration file, or a list of options.
   *
   * @default true
   */
  prettier?: boolean | PrettierOptions
  /**
   * Files to lint with Prettier. Defaults to all files included in the ESLint configuration.
   */
  prettierIncludes?: string[]
  /**
   * Whether to sort array values, or a pattern of files to sort.
   *
   * @default true
   */
  sortArrayValues?: boolean | string[]
  /**
   * Whether to sort destructured objects, or a pattern of files to sort.
   *
   * @default true
   */
  sortDestructuredKeys?: boolean | string[]
  /**
   * Whether to sort TypeScript interfaces, or a pattern of files to sort.
   *
   * @default true
   */
  sortInterfaces?: boolean
  /**
   * Whether to sort object keys, or a pattern of files to sort.
   *
   * @default true
   */
  sortObjectKeys?: boolean | string[]
  /**
   * Whether to sort props in React components. Only applies when using the React configuration.
   *
   * @default true
   */
  sortProps?: boolean
  /**
   * Whether to include the Tailwind CSS configuration.
   *
   * @default false
   */
  tailwindCss?: boolean
  /**
   * Whether to apply type checking to TypeScript files.
   *
   * @default true
   */
  typeCheck?: boolean | 'strict'
}
