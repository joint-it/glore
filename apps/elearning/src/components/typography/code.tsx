import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

export const Code = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => (
  <code
    className={cn('rounded relative bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
    ref={ref}
    {...props}
  />
))
