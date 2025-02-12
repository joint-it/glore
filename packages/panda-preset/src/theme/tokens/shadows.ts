import type { Tokens } from '@pandacss/types'

import type { SizingDefinition } from '@/helpers'

export const shadows: Tokens['shadows'] = {
  none: { value: 'none' },
  xs: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  sm: { value: ['0 1px 3px 0 rgb(0 0 0 / 0.1)', '0 1px 2px -1px rgb(0 0 0 / 0.1)'] },
  md: { value: ['0 4px 6px -1px rgb(0 0 0 / 0.1)', '0 2px 4px -2px rgb(0 0 0 / 0.1)'] },
  lg: { value: ['0 10px 15px -3px rgb(0 0 0 / 0.1)', '0 4px 6px -4px rgb(0 0 0 / 0.1)'] },
  xl: { value: ['0 20px 25px -5px rgb(0 0 0 / 0.1)', '0 8px 10px -6px rgb(0 0 0 / 0.1)'] },
  '2xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  inner: { value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
  'ring.1': { value: '0 0 0 1px' },
  'ring.2': { value: '0 0 0 2px' },
  'ring.3': { value: '0 0 0 3px' },
  'ring.4': { value: '0 0 0 4px' },
  'ring.6': { value: '0 0 0 6px' },
  'ring.8': { value: '0 0 0 8px' },
} satisfies SizingDefinition<string, string | string[]>
