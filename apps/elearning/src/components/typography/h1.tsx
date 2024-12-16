import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(({ className, ...props }, ref) => (
  <h1
    className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
    ref={ref}
    {...props}
  />
))
