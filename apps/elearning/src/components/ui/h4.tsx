import { forwardRef } from 'react'

import { cn } from '@/theme/utils'

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(({ className, ...props }, ref) => (
  <h4 className={cn('text-xl font-semibold tracking-tight', className)} ref={ref} {...props} />
))

export { H4, type H4Props }
