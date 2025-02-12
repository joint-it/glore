import type { Tokens } from '@pandacss/types'

import type { SizingDefinition } from '@/helpers'

export const radii: Tokens['radii'] = {
  xs: { value: '0.125rem' },
  sm: { value: '0.25rem' },
  md: { value: '0.375rem' },
  lg: { value: '0.5rem' },
  xl: { value: '0.75rem' },
  '2xl': { value: '1rem' },
  '3xl': { value: '1.5rem' },
  '4xl': { value: '2rem' },
  full: { value: '9999px' },
} satisfies SizingDefinition
