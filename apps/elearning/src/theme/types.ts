import type { RecipeVariant, RecipeVariantFn, SlotRecipeVariantFn, SystemStyleObject } from 'styled-system/types'

/**
 * Variant recipe function.
 */
export type Variant<K extends string = string> = Record<K, Styles>

/**
 * Variant recipe function with slots.
 */
export type SlotVariant<K extends string = string> = Record<K, SlotStyles>

/**
 * Generic variant props.
 */
export type VariantProps<
  T extends RecipeVariantFn<Record<any, Variant>> | SlotRecipeVariantFn<string, Record<any, SlotVariant>>,
> = Partial<RecipeVariant<T>>

/**
 * Style object.
 */
export type Styles = SystemStyleObject

/**
 * Style object with slots.
 */
export type SlotStyles<K extends string = string> = Partial<Record<K, Styles>>
