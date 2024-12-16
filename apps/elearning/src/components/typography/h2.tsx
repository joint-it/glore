import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(({ className, ...props }, ref) => (
  <h2
    className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
    ref={ref}
    {...props}
  />
))
