import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H4 = forwardRef<HTMLHeadingElement, H4Props>(({ className, ...props }, ref) => (
  <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} ref={ref} {...props} />
))
