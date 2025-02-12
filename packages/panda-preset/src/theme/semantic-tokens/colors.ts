import type { SemanticTokens } from '@pandacss/types'

import type { LayoutColorsDefinition, SemanticColorsDefinition } from '@/helpers'

const layoutColors: LayoutColorsDefinition = {
  background: {
    DEFAULT: { value: '{colors.gray.100}' },
    muted: { value: '{colors.gray.200}' },
    dark: { value: '{colors.gray.900}' },
  },
  text: {
    DEFAULT: { value: '{colors.gray.900}' },
    muted: { value: '{colors.gray.500}' },
    dark: { value: '{colors.gray.50}' },
  },
}

const semanticColors: SemanticColorsDefinition = {
  base: {
    lightest: { value: '{colors.gray.50}' },
    lighter: { value: '{colors.gray.100}' },
    light: { value: '{colors.gray.200}' },
    DEFAULT: { value: '{colors.gray.300}' },
    dark: { value: '{colors.gray.400}' },
    darker: { value: '{colors.gray.500}' },
    darkest: { value: '{colors.gray.900}' },
  },
  primary: {
    lightest: { value: '{colors.sky.50}' },
    lighter: { value: '{colors.sky.400}' },
    light: { value: '{colors.sky.500}' },
    DEFAULT: { value: '{colors.sky.600}' },
    dark: { value: '{colors.sky.700}' },
    darker: { value: '{colors.sky.800}' },
    darkest: { value: '{colors.sky.900}' },
  },
  secondary: {
    lightest: { value: '{colors.indigo.50}' },
    lighter: { value: '{colors.indigo.300}' },
    light: { value: '{colors.indigo.400}' },
    DEFAULT: { value: '{colors.indigo.500}' },
    dark: { value: '{colors.indigo.600}' },
    darker: { value: '{colors.indigo.700}' },
    darkest: { value: '{colors.indigo.900}' },
  },
  info: {
    lightest: { value: '{colors.blue.50}' },
    lighter: { value: '{colors.blue.300}' },
    light: { value: '{colors.blue.400}' },
    DEFAULT: { value: '{colors.blue.500}' },
    dark: { value: '{colors.blue.600}' },
    darker: { value: '{colors.blue.700}' },
    darkest: { value: '{colors.blue.900}' },
  },
  success: {
    lightest: { value: '{colors.green.50}' },
    lighter: { value: '{colors.green.300}' },
    light: { value: '{colors.green.400}' },
    DEFAULT: { value: '{colors.green.500}' },
    dark: { value: '{colors.green.600}' },
    darker: { value: '{colors.green.700}' },
    darkest: { value: '{colors.green.900}' },
  },
  warning: {
    lightest: { value: '{colors.yellow.50}' },
    lighter: { value: '{colors.yellow.300}' },
    light: { value: '{colors.yellow.400}' },
    DEFAULT: { value: '{colors.yellow.500}' },
    dark: { value: '{colors.yellow.600}' },
    darker: { value: '{colors.yellow.700}' },
    darkest: { value: '{colors.yellow.900}' },
  },
  danger: {
    lightest: { value: '{colors.red.50}' },
    lighter: { value: '{colors.red.300}' },
    light: { value: '{colors.red.400}' },
    DEFAULT: { value: '{colors.red.500}' },
    dark: { value: '{colors.red.600}' },
    darker: { value: '{colors.red.700}' },
    darkest: { value: '{colors.red.900}' },
  },
}

export const colors: SemanticTokens['colors'] = { ...layoutColors, ...semanticColors }
