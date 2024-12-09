import arrayForeach from '../rules/array-foreach.js'
import preferArrow from '../rules/prefer-arrow.js'

/**
 * Repository-specific ESLint plugin with custom rules.
 */
export default {
  name: '@repo',
  rules: {
    'array-foreach': arrayForeach,
    'prefer-arrow': preferArrow,
  },
  configs: {
    default: {
      rules: {
        '@repo/array-foreach': 2,
        '@repo/prefer-arrow': [
          2,
          {
            disallowPrototype: true,
            singleReturnOnly: true,
            classPropertiesAllowed: true,
            allowStandaloneDeclarations: true,
            allowObjectKeys: true,
          },
        ],
      },
    },
  },
}
