import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(({ className, ...props }, ref) => (
  <h3 className={cn('text-3xl font-bold', className)} ref={ref} {...props} />
))
H3.displayName = displayName('H3')

export { H3, type H3Props }
