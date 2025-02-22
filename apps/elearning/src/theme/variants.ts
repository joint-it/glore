import type { ClassValue } from 'class-variance-authority/types'

import type { FontWeight, TextSizing } from '@/theme/enums'
import type { Spacing } from '@/theme/types'
import { vd } from '@/theme/utils'

export const absolute = vd({
  true: 'absolute',
})

export const fontWeight = vd({
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
} satisfies Record<FontWeight, ClassValue>)

export const fullWidth = vd({
  true: 'w-full',
})

export const gap = vd({
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  16: 'gap-16',
  32: 'gap-32',
  64: 'gap-64',
}) satisfies Record<Spacing, ClassValue>

export const relative = vd({
  true: 'relative',
})

export const textColor = vd({
  base: 'text-gray-900 dark:text-gray-100',
  primary: 'text-primary',
  secondary: 'text-secondary',
  warning: 'text-yellow-500 dark:text-yellow-400',
  danger: 'text-red-500 dark:text-red-400',
  success: 'text-green-500 dark:text-green-400',
  info: 'text-blue-500 dark:text-blue-400',
})

export const textSize = vd({
  base: 'text-base',
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
}) satisfies Record<TextSizing, ClassValue>
