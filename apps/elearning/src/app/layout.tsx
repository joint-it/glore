import { type PropsWithChildren } from 'react'

import { Provider } from '@/components/utilities'

const RootLayout = ({ children }: PropsWithChildren) => (
  <html suppressHydrationWarning>
    <body>
      <Provider>{children}</Provider>
    </body>
  </html>
)

export default RootLayout
export * from './metadata'
