import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Large = forwardRef<HTMLDivElement, LargeProps>(({ className, ...props }, ref) => (
  <div className={cn('text-lg font-semibold', className)} ref={ref} {...props} />
))
