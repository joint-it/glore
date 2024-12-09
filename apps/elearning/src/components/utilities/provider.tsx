'use client'

import { ChakraProvider } from '@chakra-ui/react'

import { ColorModeProvider, type ColorModeProviderProps } from '@/components/ui'
import { system } from '@/lib/theme'

export interface ProviderProps extends ColorModeProviderProps {}

export const Provider = (props: ProviderProps) => (
  <ChakraProvider value={system}>
    <ColorModeProvider {...props} />
  </ChakraProvider>
)
