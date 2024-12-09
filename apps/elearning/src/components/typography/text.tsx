import { Text as ChakraText, type TextProps as ChakraTextProps } from '@chakra-ui/react'

export interface TextProps extends ChakraTextProps {}
export const Text = (props: TextProps) => <ChakraText {...props} />
