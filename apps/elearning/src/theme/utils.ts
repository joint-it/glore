import { deepMerge } from '@jointorg/utils'

import { SemanticColor, type SemanticShade, type Sizing } from '@/theme/enums'
import type { SlotStyles, SlotVariant, Styles, Variant } from '@/theme/types'
import { token, type ColorToken } from 'styled-system/tokens'
import { type SlotRecord } from 'styled-system/types'

/**
 * Extends the `css` function to allow defining nested styles for components with slots.
 */
// export const slotCss = <K extends string>(slots: SlotStyles<K>) =>
//   Object.keys(slots).reduce<Record<K, string>>(
//     (output, slot) => ({
//       ...output,
//       [slot]: slots[slot as K],
//     }),
//     {} as Record<K, string>,
//   )

/**
 * Extends the `cva` function to allow defining nested variants for components with slots.
 */
export const slotCva = <K extends string>(variants: SlotVariant<K>) =>
  Object.keys(variants).reduce<Record<K, string>>(
    (output, variant) => ({
      ...output,
      [variant]: variants[variant as K],
    }),
    {} as Record<K, string>,
  )

/**
 * Extends a slot style object with additional styles.
 */
export const extendSlotStyles = <K extends string, S extends SlotStyles<K>>(target: S, ...styles: S[]) =>
  deepMerge(target, ...styles)

/**
 * Extends a style object with additional styles.
 */
export const extendStyles = <S extends Styles>(target: S, ...styles: S[]) => deepMerge(target, ...styles)

/**
 * Returns the RGB values as a normalized array.
 */
export const rgb = (r: number, g: number, b: number): [number, number, number] => [r / 255, g / 255, b / 255]

/**
 * Returns a color token from the theme.
 */
export const colorToken = (color: ColorToken) => token(`colors.${color}`) as ColorToken

/**
 * Generate variants for each semantic color.
 */
export const semanticVariant = <S extends Styles>(
  callback: (color: (shade?: SemanticShade) => ColorToken, name: SemanticColor) => S,
) =>
  Object.keys(SemanticColor).reduce<Record<SemanticColor, S>>(
    (variants, color) => {
      const semanticColor = color as SemanticColor

      return {
        ...variants,
        [semanticColor]: callback(
          (shade?: SemanticShade) => (shade ? colorToken(`${semanticColor}.${shade}`) : colorToken(semanticColor)),
          semanticColor,
        ),
      }
    },
    {} as Record<SemanticColor, S>,
  )

/**
 * Generate slot variants for each semantic color.
 */
export const semanticSlotVariant = semanticVariant<SlotRecord<string, Styles>>

/**
 * Creates a slot variant from a variant using the provided slots.
 */
export const slotVariant = <K extends string>(variant: Variant, slots: K[]) =>
  Object.keys(variant).reduce<SlotVariant>(
    (acc, key) => ({
      ...acc,
      [key]: slots.reduce(
        (acc, slot) => ({
          ...acc,
          [slot]: variant[key],
        }),
        {},
      ),
    }),
    {},
  )

/**
 * Defines a sizing variant.
 */
export const sizingVariant = <K extends Sizing>(variant: Variant<K>) => variant

/**
 * Defines a sizing slot variant.
 */
export const sizingSlotVariant = <K extends Sizing>(variant: SlotVariant<K>) => variant
