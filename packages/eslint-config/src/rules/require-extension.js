import { existsSync, lstatSync } from 'node:fs'

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'Enforce the use of `.js` extension in relative imports',
      url: 'https://github.com/solana-labs/eslint-plugin-require-extensions',
    },
  },
  create(context) {
    const rule = node => {
      const source = node.source
      const value = source?.value.replace(/\?.*$/, '')
      if (!source) return
      if (!value || !value.startsWith('.') || value.endsWith('.js')) return

      if (!existsSync(value)) {
        context.report({
          node,
          message: 'Relative imports and exports must end with `.js`',
          fix: fixer => fixer.replaceText(source, `'${source.value}.js'`),
        })
      }

      if (existsSync(value) && lstatSync(value).isDirectory()) {
        context.report({
          node,
          message: 'Directory paths must end with `index.js`',
          fix: fixer => fixer.replaceText(node.source, `'${node.source.value}/index.js'`),
        })
      }
    }

    return {
      DeclareExportDeclaration: rule,
      DeclareExportAllDeclaration: rule,
      ExportAllDeclaration: rule,
      ExportNamedDeclaration: rule,
      ImportDeclaration: rule,
    }
  },
}
