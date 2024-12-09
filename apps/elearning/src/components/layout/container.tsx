import { Container as ChakraContainer, type ContainerProps as ChakraContainerProps } from '@chakra-ui/react'

export interface ContainerProps extends ChakraContainerProps {}
export const Container = (props: ContainerProps) => <ChakraContainer {...props} />
