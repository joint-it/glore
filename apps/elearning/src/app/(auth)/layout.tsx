import { type PropsWithChildren } from 'react'

import { Flex } from '@/components/layout'

const Layout = ({ children }: PropsWithChildren) => (
  <Flex minH="100vh" justifyContent="center" alignItems="center">
    {children}
  </Flex>
)

export default Layout
