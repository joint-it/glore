import type { VariantProps as VariantPropsBase } from 'class-variance-authority'
import type { ClassProp, ClassValue } from 'class-variance-authority/types'

import type { AnyFunction, StringToBoolean } from '@joint-it/utils'

import type { FontWeight, FontWeightBase, SemanticColor, Sizing, SizingBase, TextSizing, TextSizingBase } from '@/theme/enums'

type ConfigVariants<T> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}

type ConfigMultiVariants<T> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined
}

interface ConfigSchema extends Record<string, Variant> {}

/**
 * Class variance authority variant.
 */
export interface Variant extends Record<string, ClassValue> {}

/**
 * Properties of a component with variants.
 */
export type VariantProps<T extends AnyFunction> = VariantPropsBase<T>

/**
 * Allowed spacing values.
 */
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 16 | 32 | 64

/**
 * Class variance authority configuration.
 */
export type Config<T> = T extends ConfigSchema
  ? {
      compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigMultiVariants<T>) & ClassProp : ClassProp)[]
      defaultVariants?: ConfigVariants<T>
      variants?: T & {
        color?: Record<SemanticColor, ClassValue>
        size?: Record<Partial<Sizing> & SizingBase, ClassValue> | Record<Spacing, ClassValue>
        textSize?: Record<Partial<TextSizing> & TextSizingBase, ClassValue>
        weight?: Record<Partial<FontWeight> & FontWeightBase, ClassValue>
      }
    }
  : never
