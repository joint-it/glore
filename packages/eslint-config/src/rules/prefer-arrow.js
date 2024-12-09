/**
 * Extension of the rule `prefer-arrow-functions` from `eslint-plugin-prefer-arrow` to .
 *
 * @see {@link https://github.com/TristonJ/eslint-plugin-prefer-arrow}
 */
export default {
  meta: {
    docs: {
      description: 'prefer arrow functions',
      category: 'emcascript6',
      recommended: true,
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          disallowPrototype: {
            type: 'boolean',
          },
          singleReturnOnly: {
            type: 'boolean',
          },
          classPropertiesAllowed: {
            type: 'boolean',
          },
          allowStandaloneDeclarations: {
            type: 'boolean',
          },
          allowObjectKeys: {
            type: 'boolean',
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    return {
      'FunctionDeclaration:exit': node => inspectNode(node, context),
      'FunctionExpression:exit': node => inspectNode(node, context),
    }
  },
}

const isPrototypeAssignment = node => {
  let parent = node.parent

  while (parent) {
    switch (parent.type) {
      case 'MemberExpression':
        if (parent.property && parent.property.name === 'prototype') return true
        parent = parent.object
        break
      case 'AssignmentExpression':
        parent = parent.left
        break
      case 'Property':
      case 'ObjectExpression':
        parent = parent.parent
        break
      default:
        return false
    }
  }
  return false
}

const isConstructor = node => {
  const parent = node.parent
  return parent && parent.kind === 'constructor'
}

const containsThis = node => {
  if (typeof node !== 'object' || node === null) return false
  if (node.type === 'FunctionDeclaration') return false
  if (node.type === 'FunctionExpression') return false
  if (node.type === 'ThisExpression') return true

  return Object.keys(node).some(field => {
    if (field === 'parent') {
      return false
    }
    if (Array.isArray(node[field])) {
      return node[field].some(containsThis)
    }
    return containsThis(node[field])
  })
}

const isNamed = node => node.type === 'FunctionDeclaration' && node.id?.name

const functionOnlyContainsReturnStatement = node =>
  node.body.body.length === 1 && node.body.body[0].type === 'ReturnStatement'

const isNamedDefaultExport = node => node.id && node.id.name && node.parent.type === 'ExportDefaultDeclaration'

const isClassMethod = node => node.parent.type === 'MethodDefinition'

const isGeneratorFunction = node => node.generator === true

const isGetterOrSetter = node => node.parent.kind === 'set' || node.parent.kind === 'get'

const isCommonJSModuleProp = (node, name = 'module') =>
  node &&
  node.type === 'MemberExpression' &&
  node.object &&
  node.object.type === 'Identifier' &&
  node.object.name === name

const isModuleExport = node =>
  node.parent.type === 'AssignmentExpression' &&
  (isCommonJSModuleProp(node.parent.left) ||
    isCommonJSModuleProp(node.parent.left, 'exports') ||
    isCommonJSModuleProp(node.parent.left.object))

const isStandaloneDeclaration = node =>
  node.type === 'FunctionDeclaration' &&
  (!node.parent ||
    node.parent.type === 'Program' ||
    node.parent.type === 'ExportNamedDeclaration' ||
    node.parent.type === 'ExportDefaultDeclaration')

const inspectNode = (node, context) => {
  const opts = context.options[0] || {}

  if (isConstructor(node)) return
  if (!isClassMethod(node) && (containsThis(node.params) || containsThis(node.body))) return
  if (isGeneratorFunction(node)) return
  if (isGetterOrSetter(node)) return
  if (isClassMethod(node) && !opts.classPropertiesAllowed) return
  if (opts.allowStandaloneDeclarations && (isStandaloneDeclaration(node) || isModuleExport(node))) return
  if (opts.allowObjectKeys && node.parent.type === 'Property') return

  if (
    opts.singleReturnOnly &&
    functionOnlyContainsReturnStatement(node) &&
    !isNamedDefaultExport(node) &&
    (opts.classPropertiesAllowed || !isClassMethod(node))
  ) {
    return context.report({
      node,
      message: 'Prefer using arrow functions over plain functions which only return a value',
      fix: fixer => {
        const src = context.getSourceCode()
        let newText = null

        switch (node.type) {
          case 'FunctionDeclaration':
            newText = fixFunctionDeclaration(src, node)
            break
          case 'FunctionExpression':
            newText = fixFunctionExpression(src, node)

            if (node.async && node.parent.type === 'MethodDefinition') {
              const parentTokens = src.getTokens(node.parent)
              const asyncToken = parentTokens.find(tokenMatcher('Identifier', 'async'))
              const nextToken = parentTokens.find((_, i, arr) => arr[i - 1] && arr[i - 1] === asyncToken)
              return [
                fixer.replaceText(node, newText),
                fixer.replaceTextRange([tokenStart(asyncToken), tokenStart(nextToken)], ''),
              ]
            }
        }

        if (newText) {
          return fixer.replaceText(node, newText)
        }
      },
    })
  }
  if (opts.disallowPrototype || !isPrototypeAssignment(node)) {
    return context.report(
      node,
      isNamed(node)
        ? 'Use const or class constructors instead of named functions'
        : 'Prefer using arrow functions over plain functions',
    )
  }
}

const tokenStart = token => (token.start === undefined ? token.range[0] : token.start)
const tokenEnd = token => (token.end === undefined ? token.range[1] : token.end)

const replaceTokens = (origSource, tokens, replacements) => {
  let removeNextLeadingSpace = false
  let result = ''
  let lastTokenEnd = -1

  for (const token of tokens) {
    if (lastTokenEnd >= 0) {
      let between = origSource.substring(lastTokenEnd, tokenStart(token))
      if (removeNextLeadingSpace) {
        between = between.replace(/^\s+/, '')
      }
      result += between
    }
    removeNextLeadingSpace = false
    if (tokenStart(token) in replacements) {
      const replaceInfo = replacements[tokenStart(token)]
      if (replaceInfo[2]) {
        result = result.replace(/\s+$/, '')
      }
      result += replaceInfo[0]
      removeNextLeadingSpace = !!replaceInfo[1]
    } else {
      result += origSource.substring(tokenStart(token), tokenEnd(token))
    }
    lastTokenEnd = tokenEnd(token)
  }
  return result
}

const tokenMatcher =
  (type, value = undefined) =>
  token =>
    token.type === type && (typeof value === 'undefined' || token.value === value)

const fixFunctionExpression = (src, node) => {
  const orig = src.getText()
  const tokens = src.getTokens(node)
  const bodyTokens = src.getTokens(node.body)

  const swap = {}
  const fnKeyword = tokens.find(tokenMatcher('Keyword', 'function'))
  let prefix = ''
  let suffix = ''
  if (fnKeyword) {
    swap[tokenStart(fnKeyword)] = ['', true]
    const nameToken = src.getTokenAfter(fnKeyword)
    if (nameToken.type === 'Identifier') {
      swap[tokenStart(nameToken)] = ['']
    }
  } else if (node.parent.type === 'MethodDefinition') {
    prefix = ' = '
    suffix = ';'
    if (node.async) {
      prefix = ' = async '
    }
  } else if (node.parent.type === 'Property') {
    prefix = ': '
  }

  swap[tokenStart(bodyTokens.find(tokenMatcher('Punctuator', '{')))] = ['=> ', true]
  const parens = node.body.body[0].argument.type === 'ObjectExpression'
  swap[tokenStart(bodyTokens.find(tokenMatcher('Keyword', 'return')))] = [parens ? '(' : '', true]

  const returnRange = node.body.body.find(n => n.type === 'ReturnStatement').range
  const semicolon = bodyTokens.find(t => tokenEnd(t) === returnRange[1] && t.value === ';' && t.type === 'Punctuator')
  if (semicolon) {
    swap[tokenStart(semicolon)] = [parens ? ')' : '', true]
  }

  const closeBraces = bodyTokens.filter(tokenMatcher('Punctuator', '}'))
  const lastCloseBrace = closeBraces[closeBraces.length - 1]
  swap[tokenStart(lastCloseBrace)] = ['', false, true]

  return prefix + replaceTokens(orig, tokens, swap).replace(/ $/, '') + (parens && !semicolon ? ')' : '') + suffix
}

const fixFunctionDeclaration = (src, node) => {
  const orig = src.getText()
  const tokens = src.getTokens(node)
  const bodyTokens = src.getTokens(node.body)
  const swap = {}
  const asyncKeyword = node.async ? 'async ' : ''
  const omitVar = node.parent && node.parent.type === 'ExportDefaultDeclaration'
  const parens = node.body.body[0].argument.type === 'ObjectExpression'

  swap[tokenStart(tokens.find(tokenMatcher('Keyword', 'function')))] = omitVar ? ['', true] : ['const']
  swap[tokenStart(tokens.find(tokenMatcher('Punctuator', '(')))] = [
    omitVar ? `${asyncKeyword}(` : ` = ${asyncKeyword}(`,
  ]

  if (node.async) {
    swap[tokenStart(tokens.find(tokenMatcher('Identifier', 'async')))] = ['', true]
  }

  if (omitVar) {
    const functionKeywordToken = tokens.find(tokenMatcher('Keyword', 'function'))
    const nameToken = src.getTokenAfter(functionKeywordToken)
    if (nameToken.type === 'Identifier') {
      swap[tokenStart(nameToken)] = ['']
    }
  }
  swap[tokenStart(bodyTokens.find(tokenMatcher('Punctuator', '{')))] = ['=> ', true]
  swap[tokenStart(bodyTokens.find(tokenMatcher('Keyword', 'return')))] = [parens ? '(' : '', true]

  const returnRange = node.body.body.find(n => n.type === 'ReturnStatement').range
  const semicolon = bodyTokens.find(t => tokenEnd(t) === returnRange[1] && t.value === ';' && t.type === 'Punctuator')
  if (semicolon) {
    swap[tokenStart(semicolon)] = [parens ? ')' : '', true]
  }

  const closeBraces = bodyTokens.filter(tokenMatcher('Punctuator', '}'))
  const lastCloseBrace = closeBraces[closeBraces.length - 1]
  swap[tokenStart(lastCloseBrace)] = ['', false, true]
  return replaceTokens(orig, tokens, swap).replace(/ $/, '') + (parens && !semicolon ? ');' : ';')
}
