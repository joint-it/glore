import { readdirSync } from 'node:fs'
import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'

const SCOPES = ['deps', 'deps-dev']

const packages = readdirSync('./packages', { withFileTypes: true })
  .filter(dir => dir.isDirectory())
  .map(dir => dir.name)
  .flat()

export default {
  defaultIgnores: true,
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [RuleConfigSeverity.Error, 'always', [...SCOPES, ...packages]],
  },
} satisfies UserConfig
