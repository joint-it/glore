import arrayForeach from '../rules/array-foreach.js'
import preferArrow from '../rules/prefer-arrow.js'
import requireExtension from '../rules/require-extension.js'
import sortArrayValues from '../rules/sort-array-values.js'

/**
 * Repository-specific ESLint plugin with custom rules.
 */
export default {
  name: '@glore',
  rules: {
    'array-foreach': arrayForeach,
    'prefer-arrow': preferArrow,
    'require-extension': requireExtension,
    'sort-array-values': sortArrayValues,
  },
  configs: {
    default: {
      rules: {
        '@glore/array-foreach': 2,
        '@glore/prefer-arrow': [
          2,
          {
            disallowPrototype: true,
            singleReturnOnly: true,
            classPropertiesAllowed: true,
            allowStandaloneDeclarations: true,
            allowObjectKeys: true,
          },
        ],
        '@glore/require-extension': 0,
        '@glore/sort-array-values': 0,
      },
    },
  },
}
