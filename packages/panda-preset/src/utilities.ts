import type { PropertyConfig } from '@pandacss/types'

export const gapX: PropertyConfig = {
  values: 'spacing',
  transform: value => ({
    columnGap: `[${value}]`,
  }),
}

export const gapY: PropertyConfig = {
  values: 'spacing',
  transform: value => ({
    rowGap: `[${value}]`,
  }),
}

export const size: PropertyConfig = {
  values: 'sizes',
  transform: value => {
    if (value === 'full') {
      return { height: '100%', width: '100%' }
    }
    return { height: value, width: value }
  },
}
