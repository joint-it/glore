import type { Tokens } from '@pandacss/types'

import type { SizingDefinition } from '@/helpers'

export const blurs: Tokens['blurs'] = {
  xs: { value: '2px' },
  sm: { value: '4px' },
  md: { value: '12px' },
  lg: { value: '16px' },
  xl: { value: '24px' },
} satisfies SizingDefinition
