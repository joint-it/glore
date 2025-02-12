import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <h2 className={cn('text-4xl font-bold', className)} ref={ref} {...props} />
))
H2.displayName = displayName('H2')

export { H2, type H2Props }
