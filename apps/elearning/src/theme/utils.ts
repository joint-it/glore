import { cva as _cva, cx } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/types'
import { twMerge } from 'tailwind-merge'

import type { Config, Variant } from '@/theme/types'

/**
 * Merges class names and Tailwind CSS classes.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(cx(inputs))

/**
 * Creates an enhanced class variance authority function.
 */
export const cva = <T>(base?: ClassValue, config?: Config<T>) => _cva(base, config)

/**
 * Returns the RGB values as a normalized array.
 */
export const rgb = (r: number, g: number, b: number): [number, number, number] => [r / 255, g / 255, b / 255]

/**
 * Type-safe Tailwind CSS classes using template literals.
 */
export const tw = (strings: TemplateStringsArray, ...values: string[]) => String.raw({ raw: strings }, ...values)

/**
 * Type-safe static variant definition.
 */
export const vd = <T extends Variant>(variant: T) => variant
