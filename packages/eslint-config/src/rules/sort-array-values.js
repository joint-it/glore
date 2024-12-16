const getSortableValue = element => (typeof element.value === 'string' ? element.value.toLowerCase() : element.value)

/**
 * Enforces arrays of sortable values to be sorted.
 *
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce array values to be sorted',
      recommended: true,
      url: null,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        const comments = node?.parent?.parent?.comments
        if (comments === undefined || !comments.some(comment => comment.value.includes('@eslint-sort-array'))) {
          return
        }
        const nodeType = node?.init?.type

        if (nodeType === 'ArrayExpression' || nodeType === 'TSAsExpression') {
          const elements = nodeType === 'ArrayExpression' ? node.init.elements : node.init.expression.elements
          if (elements.length === 0) {
            return
          }
          elements.slice(1).reduce((lastElement, element) => {
            const sortabledLastElement =
              typeof lastElement.value === 'string' ? lastElement.value.toLowerCase() : lastElement.value
            const sortableElement = typeof element.value === 'string' ? element.value.toLowerCase() : element.value

            if (sortabledLastElement > sortableElement) {
              context.report({
                node: element,
                messageId: 'sortArrayValues',
                fix(fixer) {
                  return fixer.replaceTextRange(
                    [elements[0].range[0], elements[elements.length - 1].range[1]],
                    elements
                      .slice()
                      .sort((element1, element2) => {
                        const value1 = getSortableValue(element1)
                        const value2 = getSortableValue(element2)
                        return value1 > value2 ? 1 : -1
                      })
                      .reduce((sourceText, identifier, index) => {
                        const textAfterIdentifier =
                          index === elements.length - 1
                            ? ''
                            : sourceCode.getText().slice(elements[index].range[1], elements[index + 1].range[0])

                        return sourceText + sourceCode.getText(identifier) + textAfterIdentifier
                      }, ''),
                  )
                },
              })
            }
            return element
          }, elements[0])
        }
      },
    }
  },
}
