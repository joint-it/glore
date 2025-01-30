import { cva as cvaBase, type VariantProps as VariantPropsBase } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { AnyFunction, StringToBoolean } from '@/lib/types'

export const BASE_VARIANTS = {
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
  } satisfies {
    [Gap in VariantSizeNumber]: ClassValue
  },
  relative: {
    true: 'relative',
  },
  textColor: {
    base: 'text-gray-900 dark:text-gray-100',
    primary: 'text-primary',
    secondary: 'text-secondary',
    warning: 'text-yellow-500 dark:text-yellow-400',
    danger: 'text-red-500 dark:text-red-400',
    success: 'text-green-500 dark:text-green-400',
    info: 'text-blue-500 dark:text-blue-400',
  } satisfies {
    [Color in VariantColor]: ClassValue
  },
  textSize: {
    base: 'text-base',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
  } satisfies {
    [Size in VariantTextSize]: ClassValue
  },
}

interface Config<T> {
  variants?: T &
    Partial<{
      color: {
        base: ClassValue
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

/**
 * Creates an enhanced class variance authority function.
 */
export const cva = <T>(base?: ClassValue, config?: Config<T>) =>
  cvaBase(base, config as Config<ConfigSchema>) as (props: Props<T>) => string

/**
 * Merges class names and Tailwind CSS classes.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Returns the specified base variants.
 */
export const baseVariants = <T extends keyof typeof BASE_VARIANTS>(keys: T[]) =>
  keys.reduce<Pick<typeof BASE_VARIANTS, T>>(
    (acc, key) => ({ ...acc, [key]: BASE_VARIANTS[key] }),
    {} as Pick<typeof BASE_VARIANTS, T>,
  )

/**
 * Variant properties for a component.
 */
export type VariantProps<Component extends AnyFunction> = VariantPropsBase<Component>

/**
 * Variant color options.
 */
export type VariantColor = 'base' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'

/**
 * Variant size options.
 */
export type VariantSize = 'xs' | VariantSizeBase | 'xl'

/**
 * Base variant size options.
 */
export type VariantSizeBase = 'sm' | 'md' | 'lg'

/**
 * Variant size number options.
 */
export type VariantSizeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 16 | 32 | 64

/**
 * Variant text size options.
 */
export type VariantTextSize = VariantSize | 'base'
