import { cva as cvaBase, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { StringToBoolean } from '@/lib/types'

const BASE_VARIANTS = {
  absolute: {
    true: 'absolute',
  },
  fontWeight: {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  },
  fullWidth: {
    true: 'w-full',
  },
  gap: {
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
  },
  relative: {
    true: 'relative',
  },
} as const

interface Config<T> {
  variants?: T &
    Partial<{
      color: {
        primary: ClassValue
        secondary: ClassValue
        info: ClassValue
        success: ClassValue
        warning: ClassValue
        danger: ClassValue
      }
      size: {
        xs?: ClassValue
        sm: ClassValue
        md: ClassValue
        lg: ClassValue
        xl?: ClassValue
      }
    }>
  defaultVariants?: ConfigVariants<T>
  compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[]
}

interface ConfigSchema extends Record<string, Record<string, ClassValue>> {}

type ConfigVariants<T> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}

type ConfigVariantsMulti<T> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined
}

type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp

const cva = <T>(base?: ClassValue, config?: Config<T>) =>
  cvaBase(base, config as Config<ConfigSchema>) as (props: Props<T>) => string
export default cva
export type { VariantProps }

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const baseVariants = <T extends keyof typeof BASE_VARIANTS>(keys: T[]) => {
  const variants = {} as Pick<typeof BASE_VARIANTS, T>
  for (const key of keys) {
    variants[key] = BASE_VARIANTS[key]
  }
  return variants
}
