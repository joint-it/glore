import { Flex as ChakraFlex, type FlexProps as ChakraFlexProps } from '@chakra-ui/react'

export interface FlexProps extends ChakraFlexProps {}
export const Flex: React.FC<FlexProps> = props => <ChakraFlex {...props} />
