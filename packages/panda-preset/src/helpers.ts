import type { AnyObject, Key, OrArray } from '@jointorg/types'

import type {
  ColorShade,
  LayoutColor,
  LayoutShade,
  SemanticColor,
  SemanticShade,
  Sizing,
  SizingExtended,
  Spacing,
  SpacingExtended,
} from '@/enums'

export type Definition<K extends Key, V> = Record<K, DefinitionValue<V>>

export type DefinitionDefault<K extends Key, V> = Record<K | 'DEFAULT', DefinitionValue<V>>

export interface DefinitionValue<V> {
  value: V
}

export type FlatDefinition<K extends Key, V> = Record<K, V>

export type ColorsDefinition = Record<string, DefinitionValue<string> | DefinitionDefault<keyof typeof ColorShade, string>>

export type LayoutColorsDefinition<K extends Key = LayoutColor> = Record<K, DefinitionDefault<LayoutShade, string>>

export type SemanticColorsDefinition<K extends Key = SemanticColor> = Record<K, DefinitionDefault<SemanticShade, string>>

export type SpacingDefinition<K extends Key = never, V extends string = string> = Definition<K | keyof typeof Spacing, V> &
  Partial<Definition<K | keyof typeof SpacingExtended, V>>

export type FlatSizingDefinition<
  K extends Key = never,
  V extends OrArray<string> | OrArray<number> | AnyObject = string,
> = FlatDefinition<K | Sizing, V> & Partial<FlatDefinition<K | SizingExtended, V>>

export type SizingDefinition<
  K extends Key = never,
  V extends OrArray<string> | OrArray<number> | AnyObject = string,
> = Definition<K | Sizing, V> & Partial<Definition<K | SizingExtended, V>>
